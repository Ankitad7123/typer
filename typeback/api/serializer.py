from rest_framework.serializers import ModelSerializer
from .models import UserTData , Quote , Linear , Short , Long
from django.contrib.auth.models import User


class Userpserializer(ModelSerializer):
    class Meta:
        model = UserTData
        fields = '__all__'

class Quoteserializer(ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'                                                          


class Linearserializer(ModelSerializer):
    class Meta:
        model = Linear
        fields = '__all__'          


class Shortserializer(ModelSerializer):
    class Meta:
        model = Short
        fields = '__all__'  

class Longserializer(ModelSerializer):
    class Meta:
        model = Long
        fields = '__all__'


class Userserial(ModelSerializer):
    class Meta:
        model = User
        fields = ["username" , "first_name" , "last_name" , "email"]