from django.shortcuts import render
from rest_framework import viewsets

from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import UserAccount, UserPhoto
from api.models import Conversation, Participant, Message
from api.models import Grade, BlockUser

from api.serializers import UserAccountSerializer, UserPhotoSerializer
from api.serializers import GenderSerializer, RelationshipTypeSerializer, InterestedInGenderSerializer, InterestedInRelationSerializer
from api.serializers import ConversationSerializer, ParticipantSerializer, MessageSerializer
from api.serializers import GradeSerializer, BlockUserSerializer

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
