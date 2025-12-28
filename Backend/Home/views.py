from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import (
    Location,
    File_CV,
    Technology,
    SkillCategory,
    Skill,
    Project
)
from .serializers import (
    LocationSerializer,
    FileCVSerializer,
    TechnologySerializer,
    SkillCategorySerializer,
    SkillSerializer,
    ProjectSerializer
)


# =========================
# Loaction ViewSet
# =========================
class LocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [AllowAny]



# =========================
# CV ViewSet
# =========================
class FileCVViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = File_CV.objects.all()
    serializer_class = FileCVSerializer
    permission_classes = [AllowAny]


# =========================
# Technology ViewSet
# =========================
class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer
    permission_classes = [AllowAny]


# =========================
# Skill Category ViewSet
# =========================
class SkillCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.prefetch_related("skills")
    serializer_class = SkillCategorySerializer
    permission_classes = [AllowAny]


# =========================
# Skill ViewSet (Admin use)
# =========================
class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.select_related("category")
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]


# =========================
# Project ViewSet
# =========================
class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.prefetch_related("tech")
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
