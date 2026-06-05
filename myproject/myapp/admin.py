from django.contrib import admin

# Register your models here.
#the contact you made in models should be register here.

from myapp.models import Contact
admin.site.register(Contact)