from django.db import models
from django.contrib.auth import get_user_model

DEGREE = (
    ("1", "B.Tech"),
    ("2", "B.Tech Dual"),
    ("3", "BS"),
    ("4", "BSc"),
    ("5", "BDes"),
    ("6", "M.Tech"),
    ("7", "MS"),
    ("8", "Msc"),
    ("9", "MDes"),
    ("10", "PhD"),
    ("11", "MBA"),
)

User=get_user_model()

# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_user= models.IntegerField()
    branch= models.CharField(max_length=50,blank=True)
    degree= models.CharField(max_length=20,choices=DEGREE,default=1)
    gradyear= models.IntegerField(blank=True)
    fullname= models.CharField(max_length=30,blank=True)
    username= models.CharField(max_length=20, blank=True)
    bio= models.TextField(blank=True)
    profileimg= models.ImageField(upload_to='profile_images', default='def_pic.png')

    def __str__(self) -> str:
        return self.user.username
