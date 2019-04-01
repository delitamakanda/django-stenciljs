from rest_framework import serializers
from api.models import UserAccount, UserPhoto
from api.models import Gender, RelationshipType
from api.models import InterestedInGender, InterestedInRelation
from api.models import Conversation, Participant, Message
from api.models import Grade, BlockUser

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

    def create(self, validated_data):
        user = UserAccount.objects.create(**validated_data)
        user.set_password(validated_data['password'])
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
