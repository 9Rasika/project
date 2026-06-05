from django.shortcuts import render,redirect
from .models import Contact
from django.contrib import messages


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# from .chatbot import get_response

# Create your views here.
def base(request):
    return render(request,'base.html')
    
def home(request):
    return render(request,'home.html')

def typeOfWaste(request):
    return render(request,'typeOfWaste.html')
    
def segregation(request):
    return render(request,'segregation.html')

def sustainable(request):
    return render(request,'sustainable.html')

def quiz(request):
    return render(request,'quiz.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')#field name should be of html page name
        email = request.POST.get('email')
        msg = request.POST.get('message')

        contact_view = Contact(name=name, email=email, msg=msg)
        contact_view.save()
        messages.success(request, "your form has been submitted.") #it is shown on the admin page.

        return redirect('contact')

    return render(request, 'contact.html')




# @csrf_exempt
# def chat_api(request):
#     if request.method == "POST":
#         prompt = request.POST.get("prompt")
#         reply = get_response(prompt)
#         return JsonResponse({"text": reply})

#     # 👇 VERY IMPORTANT (for safety)
#     return JsonResponse({"error": "Only POST allowed"}, status=405)


def chat_page(request):
    return render(request, "chatbot.html")
