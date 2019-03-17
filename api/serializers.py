from rest_framework import serializers
from api.models import UserAccount

class UserAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ('id', 'username', 'email', 'password', 'is_staff',)
        extra_kwargs = {'password': { 'write_only': True, 'required': True }}

    def create(self, validated_data):
        user = UserAccount.objects.create(**validated_data)
        return user
