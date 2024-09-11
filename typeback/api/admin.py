from django.contrib import admin
from .models import UserTData , Quote , Short , Linear , Long

# Register your models here.
admin.site.register(UserTData)
admin.site.register(Quote)
admin.site.register(Short)
admin.site.register(Linear)
admin.site.register(Long)