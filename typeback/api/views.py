from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import mixins , generics
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.models import User
from .models import UserTData , Quote , Short , Linear , Long
from .serializer import Userpserializer , Quoteserializer , Longserializer , Shortserializer , Linearserializer , Userserial
import random

@api_view(['POST'])
def createUser(request):
    username = request.data.get('username')
    fname = request.data.get('fname')
    lname = request.data.get('lname')
    email = request.data.get('email')
    pass1 = request.data.get('pass1')
    pass2 = request.data.get('pass2')

    if (pass1 != pass2):
        return Response("password isn't same")

    if User.objects.filter(username=username):
         return Response("username is already exist")

    try:
        new_user = User.objects.create_user(username=username , first_name=fname , last_name=lname , email=email , password=pass1)
        new_user.save()
        return Response("done")
    except Exception as e:
        return Response(e)

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    login_user = authenticate(request=request , username=username , password=password)

    if login_user is not None:
        login(request , login_user)
        return Response("logged")
    else:
        return Response("wrong info")

@api_view(['DELETE'])
def delete_login(request):
    logout(request)
    return Response("out")

    
class userTd(generics.GenericAPIView , mixins.CreateModelMixin ,mixins.ListModelMixin):
    queryset = UserTData.objects.all()
    serializer_class = Userpserializer

    def post(self , request):
        return self.create(request)
    
    def get(self , request):
        return self.list(request)

@api_view(['POST'])
def findData(request):
    username = request.data.get('username')
    user = User.objects.filter(username=username).first()
    data = UserTData.objects.filter(username=user)
    serializer_class = Userpserializer(data, many=True)

    return Response(serializer_class.data)

@api_view(['POST'])
def findUserData(request):
    username = request.data.get('username')
    user = User.objects.filter(username=username).first()
    serial = Userserial(user , many=False)

    return Response(serial.data)



class Quote(generics.GenericAPIView , mixins.CreateModelMixin , mixins.ListModelMixin):
    queryset = Quote.objects.all()
    serializer_class = Quoteserializer

    def post(self , request):
        return self.create(request)

    def get(self , request):
        return self.list(request)

class Short(generics.GenericAPIView , mixins.CreateModelMixin , mixins.ListModelMixin):
    queryset = Short.objects.all()
    serializer_class = Shortserializer

    def post(self , request):
        return self.create(request)

    def get(self , request):
        return self.list(request)


class Long(generics.GenericAPIView , mixins.CreateModelMixin , mixins.ListModelMixin):
    queryset = Long.objects.all()
    serializer_class = Longserializer

    def post(self , request):
        return self.create(request)
    
    def get(self , request):
        return self.list(request)


class Linear(generics.GenericAPIView , mixins.CreateModelMixin , mixins.ListModelMixin):
    queryset = Linear.objects.all()
    serializer_class = Linearserializer

    def post(self , request):
        return self.create(request)

    def get(self , request):
        return self.list(request)


# @api_view(['GET'])    
# def getqt(request):
#     r_id = random.randint(1 , 10)
#     data = Quote.objects.all()
#     serilaizer = Quoteserializer(data , many=False )

#     return Response(serilaizer.data)





@api_view(['GET'])
def getutd(request):
    r_id = random.randint(1 , 10)
    data = UserTData.objects.get(id=r_id)
    serializer = Userpserializer(data , many=False)
    return Response(serializer.data)