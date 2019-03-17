from django.shortcuts import render
from rest_framework import viewsets

from api.models import UserAccount
from api.serializers import UserAccountSerializer

# Create your views here.
class UserAccountViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all().order_by('-date_joined')
    serializer_class = UserAccountSerializer
