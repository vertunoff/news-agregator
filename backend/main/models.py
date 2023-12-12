from django.db import models
import json
# Create your models here.
class Article(models.Model):
    url = models.CharField(max_length=500)
    title = models.CharField(max_length=300)
    resource_name = models.CharField(max_length=50)
    topic = models.CharField(max_length=20)
    photo = models.CharField(max_length=300)
    text = models.CharField(max_length=1000)
    date = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now=False, auto_now_add=True)
    def __str__(self):
        return self.resource_name + self.title[:20]
