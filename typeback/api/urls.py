
from django.urls import path
from .views import createUser , findUserData ,  delete_login , login_user , userTd , findData, Quote , Long , Linear , Short  , getutd

urlpatterns = [
   
    path('user/' , createUser , name='createUser'),
    path('login/' , login_user , name='login'),
    path('logout/' , delete_login , name='logout'),
    path('fuser/' , findUserData , name='logout'),
    path("td/" , userTd.as_view() , name='Td'),
    path("fd/" , findData , name='fd'),
    path("qt/" , Quote.as_view() , name='qt'),
    path("lg/" , Long.as_view() , name='lg'),
    path("ln/" , Linear.as_view() , name='ln'),
    path("sh/" , Short.as_view() , name='sh'),
  
     path('getutd/' , getutd , name='getutd')


]