from django.contrib import admin
from Home.models import (
    Location,
    File_CV,
    Technology,
    SkillCategory,
    Skill,
    Project
)


# Register your models here.
admin.site.register(Location)
admin.site.register(File_CV)
admin.site.register(SkillCategory)
admin.site.register(Skill)
admin.site.register(Technology)


# Custom admin for Project
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'live_url', 'github_url')
    search_fields = ('title',)
    filter_horizontal = ('tech',)  # <-- This creates the dual box UI