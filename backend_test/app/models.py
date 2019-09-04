from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model

import time

#main node in database
class DayCard(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    create_date = models.DateTimeField('Create Date', auto_now_add=timezone.now)
    summary = models.TextField(default='do some summary for today!')

    def __str__(self):
        return self.create_date.__str__()[0:10]

#detail arrangements
class DetailArrangement(models.Model):
    Duration_pool = (
        ('M', 'Morning things'),
        ('A', 'Afternoon things'),
        ('E', 'Evening Things')
    )

    item_name = models.CharField(max_length=20)
    isfinished = models.BooleanField('arrangement state')
    time = models.CharField(max_length=5)
    item_duration = models.CharField(max_length=1, choices=Duration_pool)
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)
    

    def __str__(self):
        return str(self.item_name)

#todo item
class TodoItem(models.Model):
    todo_item_name = models.CharField(max_length=20)
    isfinished = models.BooleanField('todo-item state')
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.todo_item_name)

#single note
class Note(models.Model):
    note = models.TextField(default='write some notes here')
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)  

    def __str__(self):
        return str(self.note)

#test
# class ScheduleBookPost(models.Model):
#     user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
#     title = models.CharField(max_length=120, null=True, blank=True)
#     content = models.TextField(max_length=120, null=True, blank=True)
#     timestamp = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return str(self.user)
