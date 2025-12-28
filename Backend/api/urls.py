from django.urls import path, include
from rest_framework.routers import DefaultRouter
from Email import views as email_views
from Home.views import (
    LocationViewSet,
    FileCVViewSet,
    TechnologyViewSet,
    SkillCategoryViewSet,
    SkillViewSet,
    ProjectViewSet
)

router = DefaultRouter()
router.register(r'locations', LocationViewSet, basename='locations')
router.register(r'cv', FileCVViewSet, basename='cv')
router.register(r'technologies', TechnologyViewSet)
router.register(r'skill-categories', SkillCategoryViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contacts/', email_views.contact_form_view, name='contact_form'),
]
