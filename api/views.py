import jwt
import json

from django.shortcuts import render, HttpResponse, get_object_or_404
from django.contrib.auth import authenticate

from rest_framework import viewsets, permissions, status, generics, pagination, mixins
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import UserAccount, UserPhoto
from api.models import Conversation, Participant, Message
from api.models import Grade, BlockUser

from api.serializers import UserAccountSerializer, UserPhotoSerializer
from api.serializers import GenderSerializer, RelationshipTypeSerializer, InterestedInGenderSerializer, InterestedInRelationSerializer
from api.serializers import ConversationSerializer, ParticipantSerializer, MessageSerializer
from api.serializers import GradeSerializer, BlockUserSerializer

from api.permissions import AnonPermissionOnly
from api.permissions import IsOwnerOrReadOnly

from dating.settings import SECRET_KEY

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

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

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def perform_create(self, serializer):
        serializer.save(user_account=self.request.user)


class UserAccountDetailAPIView(generics.RetrieveAPIView):
    queryset            = UserAccount.objects.filter(is_active=True)
    serializer_class    = UserAccountSerializer
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


# https://github.com/pyaf/djangular
class CreateUserView(CreateAPIView):
    serializer_class = UserAccount
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            user = self.model.get(username=serializer.data['username'])
            payload = jwt_payload_handler(user)
            token = jwt_encode_handler(payload)
            return Response(
                token,
                status=status.HTTP_201_CREATED,
                headers=headers
            )
        else:
            return Response(
                status=status.HTTP_400_BAD_REQUEST
            )


class LoginUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        username = request.data.get('emailOrUsername')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            payload = jwt_payload_handler(user)
            token = {
                'token': jwt.encode(payload, SECRET_KEY),
                'status': 'success'
                }
            return Response(token)
        else:
            return Response(
              {'error': 'Invalid credentials',
              'status': 'failed'},
            )
