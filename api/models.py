from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

"""
User Accounts
"""

class Gender(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class RelationshipType(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class InterestedInGender(models.Model):
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
    gender = models.ForeignKey(Gender)

    def __str__(self):
        return "%s : %s" % (self.gender, self.user_account)


class InterestedInRelation(models.Model):
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
    relationship_type = models.ForeignKey(RelationshipType)

    def __str__(self):
        return "%s : %s" % (self.relationship_type, self.user_account)


class UserPhoto(models.Model):
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
    link = models.TextField()
    details = models.TextField(null=True)
    time_added = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)

class UserAccount(AbstractUser):
    gender = models.ForeignKey(Gender, null=True)
    details = models.TextField()
    confirmation_code = models.TextField()
    confirmation_time = models.DateTimeField(null=True)
    popularity = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)


"""
Conversations
"""

class Conversation(models.Model):
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
    time_started = models.DateTimeField()
    time_closed = models.DateTimeField(null=True)


class Participant(models.Model):
    conversation = models.ForeignKey(Conversation)
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True)
    time_joined = models.DateTimeField()
    time_left = models.DateTimeField(null=True)


class Message(models.Model):
    participant = models.ForeignKey(Participant)
    message_text = models.TextField()
    timestamp = models.DateTimeField()



"""
Grades & Blocks
"""

class Grade(models.Model):
    user_account_given = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='grade_given')
    user_account_received = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='grade_received')
    grade = models.IntegerField()


class BlockUser(models.Model):
    user_account = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='rel_to_from')
    user_account_blocked = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, related_name='rel_to_set')
