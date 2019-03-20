from django.conf.urls import url, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserAccountViewSet)
router.register(r'genders', views.GenderViewSet)
router.register(r'relationship-type', views.RelationshipTypeSerializerViewSet)
router.register(r'interested-in-gender', views.InterestedInGenderViewSet)
router.register(r'interested-in-relation', views.InterestedInRelationViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
