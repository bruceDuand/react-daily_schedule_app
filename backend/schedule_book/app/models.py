from django.db import models
from django.utils import timezone

#main node in database
class DayCard(models.Model):
    create_date = models.DateTimeField('Create Date', auto_now_add=timezone.now)
    summary = models.TextField(default='do some summary for today!')

#detail arrangements
class DetailArrangement(models.Model):
    Time_pool = (
        ('M', 'Morning things'),
        ('A', 'Afternoon things'),
        ('E', 'Evening Things')
    )

    item_name = models.CharField(max_length=20)
    isfinished = models.BooleanField('detail arrangement state')
    item_duration = models.CharField(max_length=1, choices=Time_pool)
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)  

#todo item
class TodoItem(models.Model):
    todo_item_name = models.CharField(max_length=20)
    isfinished = models.BooleanField('todo-item state')
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)  

#single note
class Note(models.Model):
    note_content = models.TextField('write some notes here')
    day_key = models.ForeignKey(DayCard, on_delete=models.CASCADE)  
