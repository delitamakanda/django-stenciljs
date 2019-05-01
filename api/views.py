import jwt
import json

from django.shortcuts import render, HttpResponse, get_object_or_404
from django.contrib.auth import authenticate
from django.utils.translation import gettext as _
from django.db.models import Q
from django.core.mail import send_mail

from rest_framework import viewsets, permissions, status, generics, pagination, mixins
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from rest_framework.parsers import MultiPartParser, FormParser

from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import UserAccount, UserPhoto
from api.models import Conversation, Participant, Message
from api.models import Grade, BlockUser

from api.serializers import UserAccountSerializer, UserPhotoSerializer, UserAccountPublicSerializer
from api.serializers import GenderSerializer, RelationshipTypeSerializer, InterestedInGenderSerializer, InterestedInRelationSerializer
from api.serializers import ConversationSerializer, ParticipantSerializer, MessageSerializer
from api.serializers import GradeSerializer, BlockUserSerializer

from api.permissions import AnonPermissionOnly
from api.permissions import IsOwnerOrReadOnly

from dating.settings import SECRET_KEY

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_response_payload_handler = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER

# Create your views here.
class UserPhotoAPIDetailView(mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    serializer_class = UserPhotoSerializer
    queryset = UserPhoto.objects.all()
    lookup_field = 'id'

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class UserPhotoAPIView(mixins.CreateModelMixin,generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = UserPhotoSerializer
    passed_id = None
    search_fields = ('user_account__username', 'details', 'user_account__email')
    ordering_fields = ('user_account__username', 'time_added')
    queryset = UserPhoto.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = UserPhotoSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(user_account=self.request.user)


class UserAccountDetailAPIView(generics.RetrieveAPIView):
    queryset            = UserAccount.objects.filter(is_active=True)
    serializer_class    = UserAccountPublicSerializer
    lookup_field        = 'username'

    def get_serializer_context(self):
        return {'request': self.request}


class UserPhotoAPIView(UserPhotoAPIView):
    serializer_class = UserPhotoSerializer

    def get_queryset(self, *args, **kwargs):
        username = self.kwargs.get("username", None)

        if username is None:
            return UserPhoto.objects.none()
        return UserPhoto.objects.filter(user_account__username=username)

    def post(self, request, *args, **kwargs):
        return Response({"detail": "Not allowed here"}, status=400)


class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer
    permission_classes = (permissions.AllowAny,)


class RelationshipTypeSerializerViewSet(viewsets.ModelViewSet):
    queryset = RelationshipType.objects.all()
    serializer_class = RelationshipTypeSerializer


class InterestedInGenderViewSet(viewsets.ModelViewSet):
    queryset = InterestedInGender.objects.all()
    serializer_class = InterestedInGenderSerializer


class InterestedInRelationViewSet(viewsets.ModelViewSet):
    queryset = InterestedInRelation.objects.all()
    serializer_class = InterestedInRelationSerializer


class UserAccountViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all().order_by('-date_joined')
    serializer_class = UserAccountSerializer
    permission_classes = (permissions.AllowAny, )


class UserPhotoViewSet(viewsets.ModelViewSet):
    queryset = UserPhoto.objects.all()
    serializer_class = UserPhotoSerializer
    lookup_field = 'user_account__id'


class ConversationViewset(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer


class ParticipantViewset(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer


class MessageViewset(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class GradeViewSet(viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer


class BlockUserViewSet(viewsets.ModelViewSet):
    queryset = BlockUser.objects.all()
    serializer_class = BlockUserSerializer



class LoginUserView(APIView):
    '''
    post: \n
    - username or email (required)\n
    - password (required)
    '''
    permission_classes = [AnonPermissionOnly]
    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return Response({'detail': _('You are already authenticated')}, status=400)
        data = request.data
        username = data.get('username') # username or email address
        password = data.get('password')
        qs = UserAccount.objects.filter(
                Q(username__iexact=username)|
                Q(email__iexact=username)
            ).distinct()
        if qs.count() == 1:
            user_obj = qs.first()
            if user_obj.check_password(password):
                user = user_obj
                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)
                response = jwt_response_payload_handler(token, user, request=request)
                return Response(response)
        return Response({"detail": _("Invalid credentials")}, status=401)


class CreateUserView(generics.CreateAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer
    permission_classes = [AnonPermissionOnly]

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}

    def perform_create(self, serializer):
        created_obj = serializer.save()
        title = _("Lov3r account confirmation")
        content = self.request.get_host() + "/confirm/" + str(created_obj.confirmation_code) + "/" + created_obj.username
        send_mail(title, content, 'no-reply@lov3r.com', [created_obj.email], fail_silently=False)


# https://github.com/pyaf/djangular
# class CreateUserView(CreateAPIView):
#     serializer_class = UserAccount
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             self.perform_create(serializer)
#             headers = self.get_success_headers(serializer.data)
#             user = self.model.get(username=serializer.data['username'])
#             payload = jwt_payload_handler(user)
#             token = jwt_encode_handler(payload)
#             return Response(
#                 token,
#                 status=status.HTTP_201_CREATED,
#                 headers=headers
#             )
#         else:
#             return Response(
#                 status=status.HTTP_400_BAD_REQUEST
#             )
#
#
# class LoginUserView(APIView):
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, *args, **kwargs):
#         username = request.data.get('emailOrUsername')
#         password = request.data.get('password')
#
#         user = authenticate(username=username, password=password)
#         if user:
#             payload = jwt_payload_handler(user)
#             token = {
#                 'token': jwt.encode(payload, SECRET_KEY),
#                 'status': 'success'
#                 }
#             return Response(token)
#         else:
#             return Response(
#               {'error': 'Invalid credentials',
#               'status': 'failed'},
#             )
