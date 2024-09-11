from django.db import models
from django.contrib.auth.models import User


class UserTData(models.Model):
    username = models.CharField(max_length=150 , default="none") 
    accuracy = models.IntegerField(default=0)
    wpm = models.IntegerField( default=0)
    nofC = models.IntegerField()

    def __str__(self):
        return self.user.username


class Quote(models.Model):
    quote = models.CharField(max_length=300)

   


    def __str__(self):
        return self.quote

class Long(models.Model):
    long = models.CharField(max_length=500)


    def __str__(self):
        return self.long

class Short(models.Model):
    short = models.CharField(max_length=300)


    def __str__(self):
        return self.short

class Linear(models.Model):
    linear = models.CharField(max_length=300)


    def __str__(self):
        return self.linear




