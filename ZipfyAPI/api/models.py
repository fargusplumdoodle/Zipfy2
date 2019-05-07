from django.db import models


class Word(models.Model):
    word = models.CharField(max_length=50)
    count = models.IntegerField()


class Zipfy(models.Model):
    total_documents = models.IntegerField()
