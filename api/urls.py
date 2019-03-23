from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserAccountViewSet)
router.register(r'user-photo', views.UserPhotoViewSet)
router.register(r'genders', views.GenderViewSet)
router.register(r'relationship-type', views.RelationshipTypeSerializerViewSet)
router.register(r'interested-in-gender', views.InterestedInGenderViewSet)
router.register(r'interested-in-relation', views.InterestedInRelationViewSet)
router.register(r'conversations', views.ConversationViewset)
router.register(r'participants', views.ParticipantViewset)
router.register(r'messages', views.MessageViewset)
router.register(r'grades', views.GradeViewSet)
router.register(r'block-user', views.BlockUserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
