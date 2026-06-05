from django.db import models

# Create your models here.

#this field name should be equal htmlname fiels

class Contact(models.Model):
    name=models.CharField(max_length=120)
    email=models.EmailField()
    msg = models.TextField() 

    def __str__(self):#it shows name instead of contact1,cont2,...
        return self.name

    