import datetime

from django.utils import timezone

from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from rest_framework.reverse import reverse as api_reverse

from api.models import UserAccount, UserPhoto
from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import Conversation, Participant, Message
from api.models import Grade, BlockUser

jwt_payload_handler             = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler              = api_settings.JWT_ENCODE_HANDLER
jwt_response_payload_handler    = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER
expire_delta                    = api_settings.JWT_REFRESH_EXPIRATION_DELTA


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
        fields = ('id', 'username', 'password', 'email', 'is_staff','gender', 'details', 'confirmation_code', 'confirmation_time', 'popularity',)
        extra_kwargs = {'password': { 'write_only': True, 'required': True }}

    def get_displayName(self, obj):
        return obj.username

    def create(self, validated_data):
        user = UserAccount(
            username=validated_data.get('username'),
            email=validated_data.get('email')
        )
        user.set_password(validated_data.get('password'))
        user.is_active = True
        user.save()
        return user


class UserPhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserPhoto
        fields = ('id', 'user_account', 'link', 'details', 'time_added', 'active',)


class ConversationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Conversation
        fields = ('id', 'user_account', 'time_started', 'time_closed',)


class ParticipantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Participant
        fields = ('id', 'conversation', 'user_account', 'time_joined', 'time_left',)


class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ('id', 'participant', 'message_text', 'timestamp',)


class GradeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Grade
        fields = ('id', 'user_account_given', 'user_account_received', 'grade',)


class BlockUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlockUser
        fields = ('id', 'user_account', 'user_account_blocked',)
