import jwt
import json

from django.shortcuts import render, HttpResponse
from django.contrib.auth import authenticate

from rest_framework import viewsets, permissions, status
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

from dating.settings import SECRET_KEY

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

# Create your views here.
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

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
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
