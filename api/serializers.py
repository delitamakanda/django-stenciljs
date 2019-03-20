from rest_framework import serializers
from api.models import UserAccount
from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation

class GenderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gender
        fields = ('id', 'name',)


class RelationshipTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = RelationshipType
        fields = ('id', 'name',)


class InterestedInGenderSerializer(serializers.ModelSerializer):

    class Meta:
        model = InterestedInGender
        fields = ('id', 'user_account', 'gender',)


class InterestedInRelationSerializer(serializers.ModelSerializer):

    class Meta:
        model = InterestedInRelation
        fields = ('id', 'user_account', 'relationship_type',)


class UserAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ('id', 'username', 'email', 'password', 'is_staff','gender', 'details', 'confirmation_code', 'confirmation_time', 'popularity',)
        extra_kwargs = {'password': { 'write_only': True, 'required': True }}

    def create(self, validated_data):
        user = UserAccount.objects.create(**validated_data)
        return user
