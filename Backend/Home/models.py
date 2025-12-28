from django.db import models
from cloudinary.models import CloudinaryField


# Create your models here.

# =========================
#       LOCATION
# =========================
class Location(models.Model):
    current_location = models.CharField(max_length=30, blank=False)
    primary_location = models.CharField(max_length=30, blank=False)
    def __str__(self):
        return self.current_location



# =========================
#       DOWNLOAD CV
# =========================
class File_CV(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    file = CloudinaryField('file', folder='Er_Sujan/CV/', blank=False, null=False, help_text='Upload a JPG file only.')
    def __str__(self):
        return self.name




# =========================
#       SKILLS
# =========================
class SkillCategory(models.Model):
    SKILL_TYPE_CHOICES = [
        ("FRONTEND_PROTOCOLS", "Frontend Protocols"),
        ("BACKEND_LOGIC", "Backend Logic"),
        ("TOOLS", "Tools"),
    ] 
    skill_type = models.CharField( max_length=50, choices=SKILL_TYPE_CHOICES, unique=True ) 
    icon = models.CharField( max_length=50, help_text="Example: FaCode, FaDatabase, FaTools, FaBrain" ) 
    def __str__(self):
        return self.skill_type

class Skill(models.Model):
    category = models.ForeignKey( SkillCategory, related_name="skills", on_delete=models.CASCADE ) 
    name = models.CharField(max_length=100)
    level = models.PositiveIntegerField(help_text="Skill level from 0 to 100")
    class Meta:
        unique_together = ("category", "name")
        ordering = ["-level"]
    def __str__(self):
        return f"{self.name} ({self.level}%) ----> [ {self.category} ]"




# =========================
#       PROJECT
# =========================
class Technology(models.Model):
    name = models.CharField(max_length=25, unique=True, help_text='Example: cloudinary, Render, React, Django...')
    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=35, blank=False)
    description = models.TextField(max_length=100, blank=False)
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    tech = models.ManyToManyField(Technology, related_name='project')
    image = CloudinaryField('image', folder='Er_Sujan/Project/', blank=False, null=True)
    def __str__(self):
        return self.title


