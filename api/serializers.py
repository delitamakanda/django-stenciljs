import datetime
import random
import string

from django.utils import timezone
from django.utils.translation import gettext as _

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


class UserAccountPublicSerializer(serializers.ModelSerializer):
    uri = serializers.SerializerMethodField(read_only=True)
    displayName = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ('id', 'username', 'uri', 'displayName', 'is_active', 'email', 'is_staff','gender', 'popularity')

    def get_uri(self, obj):
        request = self.context.get('request')
        return api_reverse("api_dating:user-detail", kwargs={"username": obj.username}, request=request)

    def get_displayName(self, obj):
        return obj.username



class UserPhotoSerializer(serializers.ModelSerializer):
    uri = serializers.SerializerMethodField(read_only=True)
    user_account = UserAccountPublicSerializer(read_only=True)

    class Meta:
        model = UserPhoto
        fields = ('id', 'uri', 'user_account', 'link', 'file', 'details', 'time_added', 'active',)
        read_only_fields = ['user_account']

    def get_uri(self, obj):
        request = self.context.get('request')
        return api_reverse('api_dating:user-photo-detail', kwargs={"id": obj.id}, request=request)

    def validate(self, data):
        details = data.get("details", None)
        if details == "":
            details = None
        image = data.get("image", None)
        if details is None and image is None:
            raise serializers.ValidationError(_('Content or image is required.'))
        return data


class UserPhotoInlineUserAccountSerializer(UserPhotoSerializer):

    class Meta:
        model = UserPhoto
        fields = ('uri', 'id', 'details', 'file')




class UserAccountSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    expires = serializers.SerializerMethodField(read_only=True)
    message = serializers.SerializerMethodField(read_only=True)
    uri = serializers.SerializerMethodField(read_only=True)
    displayName = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserAccount
        fields = ('id', 'username', 'password', 'password2', 'token','expires', 'uri','message', 'displayName', 'email', 'is_staff','gender', 'is_active', 'confirmation_code', 'confirmation_time', 'popularity',)
        extra_kwargs = {'password': { 'write_only': True, 'required': True }}

    def get_message(self, obj):
        return _("Thank you for registering. Please verify your email before continuing.")

    def get_expires(self, obj):
        return timezone.now() + expire_delta - datetime.timedelta(seconds=200)

    def validate_email(self, value):
        qs = UserAccount.objects.filter(email__iexact=value)
        if qs.exists():
            raise serializers.ValidationError(_('User with this email already exists'))
        return value

    def validate_username(self, value):
        qs = UserAccount.objects.filter(username__iexact=value)
        if qs.exists():
            raise serializers.ValidationError(_('User with this username already exists'))
        return value

    def get_token(self, obj):
        user = obj
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return token

    def get_uri(self, obj):
        request = self.context.get('request')
        return api_reverse("api_dating:user-detail", kwargs={"username": obj.username}, request=request)

    def validate(self, data):
        pw  = data.get('password')
        pw2 = data.pop('password2')
        if pw != pw2:
            raise serializers.ValidationError(_('Passwords must match'))
        return data

    def get_displayName(self, obj):
        return obj.username

    def create(self, validated_data):
        user = UserAccount(
            username=validated_data.get('username'),
            email=validated_data.get('email')
        )
        user.set_password(validated_data.get('password'))
        user.is_active = False
        user.confirmation_code = ''.join(random.choice(string.ascii_uppercase + string.digits + string.ascii_lowercase) for x in range(33))
        user.gender = validated_data.get('gender')
        user.last_login = datetime.datetime.now()
        user.save()
        return user


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
