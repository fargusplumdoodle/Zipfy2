from django.db import models


class Word(models.Model):
    word = models.CharField(max_length=50)
    word_count = models.IntegerField(default=0)

    def __str__(self):
        return self.word + "_" + str(self.word_count)


class Zipfy(models.Model):
    total_documents = models.IntegerField(default=0)

