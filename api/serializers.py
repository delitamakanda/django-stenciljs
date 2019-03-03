from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="api_dating:user-detail")

    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'password', 'is_staff', 'groups')
        extra_kwargs = {'password': { 'write_only': True, 'required': True }}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        return user


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    user = UserSerializer()

    class Meta:
        model = Group
        fields = ('id', 'url', 'name', 'user')
