from rest_framework import serializers
from app.models import DayCard, DetailArrangement, TodoItem, Note
# from app.models import ScheduleBookPost

# class ScheduleBookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ScheduleBookPost
#         fields = [
#             'pk',
#             'user',
#             'title',
#             'content',
#             'timestamp'
#         ]

class DayCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = DayCard
        fields = ('id', 'user', 'create_date', 'summary')

class DetailArrangementSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailArrangement
        fields = ('id', 'item_name', 'isfinished', 'item_duration', 'day_key', 'time')

class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ('id', 'todo_item_name', 'isfinished', 'day_key')

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'note','day_key')