from django.shortcuts import render
from django.http import HttpResponse
import os

# Create your views here.
def say_hello(request):
    return render(request, 'Sign_Up/dist/index.html')

def index(request):
    return HttpResponse('<h1>Welcome to Social book</h1>')
