from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin

from api.models import UserAccount
from api.models import UserPhoto

from api.models import Gender
from api.models import RelationshipType

from api.models import InterestedInGender
from api.models import InterestedInRelation

from api.models import Conversation
from api.models import Participant
from api.models import Message

from api.models import Grade
from api.models import BlockUser

@admin.register(UserAccount)
class UserAdmin(DefaultUserAdmin):
    pass

# admin.site.register(UserAccount)
admin.site.register(UserPhoto)
admin.site.register(Gender)
admin.site.register(RelationshipType)
admin.site.register(InterestedInGender)
admin.site.register(InterestedInRelation)
admin.site.register(Conversation)
admin.site.register(Participant)
admin.site.register(Message)
admin.site.register(Grade)
admin.site.register(BlockUser)
