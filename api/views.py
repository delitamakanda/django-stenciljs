from django.shortcuts import render
from rest_framework import viewsets

from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import UserAccount

from api.serializers import UserAccountSerializer
from api.serializers import GenderSerializer, RelationshipTypeSerializer, InterestedInGenderSerializer, InterestedInRelationSerializer

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
