from rest_framework import serializers
from Home.models import (
    Location,
    File_CV,
    Technology,
    SkillCategory,
    Skill,
    Project
)


# =========================
# Location Serializer
# =========================
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ["id", "current_location", "primary_location"]



# =========================
# CV Serializer
# =========================
class FileCVSerializer(serializers.ModelSerializer):
    class Meta:
        model = File_CV
        fields = ["id", "name", "file"]


# =========================
# Technology Serializer
# =========================
class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["id", "name"]


# =========================
# Skill Serializer
# =========================
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "level"]


# =========================
# Skill Category Serializer
# =========================
class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = [
            "id",
            "skill_type",
            "icon",
            "skills",
        ]


# =========================
# Project Serializer
# =========================
class ProjectSerializer(serializers.ModelSerializer):
    tech = TechnologySerializer(many=True, read_only=True)
    tech_ids = serializers.PrimaryKeyRelatedField(
        queryset=Technology.objects.all(),
        many=True,
        write_only=True,
        source="tech"
    )

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "live_url",
            "github_url",
            "image",
            "tech",
            "tech_ids",
        ]
