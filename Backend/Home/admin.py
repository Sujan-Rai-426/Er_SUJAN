from django.contrib import admin
from django import forms
from Home.models import (
    Location,
    File_CV,
    Technology,
    SkillCategory,
    Skill,
    Project
)

# 1. Custom Form for Project to ensure No-CSS usability
class ProjectAdminForm(forms.ModelForm):
    # Overriding the field here forces the checkbox widget
    tech = forms.ModelMultipleChoiceField(
        queryset=Technology.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=False,
        label="Select Technologies"
    )

    class Meta:
        model = Project
        fields = '__all__'

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    list_display = ('title', 'live_url', 'github_url')


# 2. Skill Inline for better management
class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ('skill_type', 'icon')
    inlines = [SkillInline]

# 3. Standard Registration for remaining models
@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('current_location', 'primary_location')

@admin.register(File_CV)
class FileCVAdmin(admin.ModelAdmin):
    list_display = ('name', 'file')

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# Note: Skill is registered via Inline in SkillCategory, 
# but we register it here too for direct access.
@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'level', 'category')
    list_filter = ('category',)