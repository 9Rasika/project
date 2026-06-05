from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [

    path("",views.home,name='home'),
    path("home",views.home,name='home'),
    path("typeOfWaste",views.typeOfWaste,name='typeOfWaste'),
    path("segregation",views.segregation,name='segregation'),
    path("chatbot/", views.chat_page, name="chatbot"),
    path("sustainable",views.sustainable,name="sustainable"),
    path("quiz",views.quiz,name="quiz"),
    path("contact",views.contact,name='contact'),
    
]