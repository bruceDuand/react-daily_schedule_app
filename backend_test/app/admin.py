from django.contrib import admin
from .models import DayCard, DetailArrangement, TodoItem, Note

admin.site.register(DayCard)
admin.site.register(DetailArrangement)
admin.site.register(TodoItem)
admin.site.register(Note)