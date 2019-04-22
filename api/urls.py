from django.conf.urls import url, include
from rest_framework import routers
from api import views

from rest_framework_jwt.views import (obtain_jwt_token,
                                    verify_jwt_token,
                                    refresh_jwt_token)

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
    url(r'^register-user', views.CreateUserView.as_view()),
    url(r'^login-user', views.LoginUserView.as_view()),
    url(r'^jwt/', obtain_jwt_token),
    url(r'^verify/', verify_jwt_token),
    url(r'^refresh/', refresh_jwt_token),

    url(r'^user/(?P<username>\w+)/$', views.UserAccountDetailAPIView.as_view(), name='user-detail'),
    url(r'^user/(?P<username>\w+)/photo/$', views.UserPhotoAPIView.as_view(), name='user-photo'),
    url(r'^user-photo/$', views.UserPhotoAPIView.as_view(), name='user-photo-list'),
    url(r'^user-photo/(?P<id>\d+)/detail/$', views.UserPhotoAPIDetailView.as_view(), name='user-photo-detail'),
]
