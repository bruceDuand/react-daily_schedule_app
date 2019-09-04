from django.urls import path
from app import views
# from .views import ScheduleBookRudView, ScheduleBookListView
from .views import DayCardListView, DayCardRudView
from .views import DetailArrangementListView, DetailArrangementRudView, DetailArrangementDayKeyListView
from .views import TodoItemListView, TodoItemRudView, TodoItemDayKeyListView
from .views import NoteListView, NoteRudView, NoteDayKeyListView
app_name = 'api-ScheduleBook'

urlpatterns = [
    path('days/', DayCardListView.as_view(), name='api-daycard-list'),
    path('days/<int:id>/', DayCardRudView.as_view(), name='api-daycard-rud'),
    path('arrangements/', DetailArrangementListView.as_view(), name='api-arrangement-list'),
    path('arrangements/<int:id>/', DetailArrangementRudView.as_view(), name='api-arrangement-rud'),
    path('arrangements/daykey/<int:day_key>/', DetailArrangementDayKeyListView.as_view(), name='api-arrangement-daykey-list'),
    path('todos/', TodoItemListView.as_view(), name='api-todo-list'),
    path('todos/daykey/<int:day_key>/', TodoItemDayKeyListView.as_view(), name='api-todo-daykey-list'),
    path('todos/<int:id>/', TodoItemRudView.as_view(), name='api-todo-rud'),
    path('notes/', NoteListView.as_view(), name='api-note-list'),
    path('notes/daykey/<int:day_key>/', NoteDayKeyListView.as_view(), name='api-note-daykey-list'),
    path('notes/<int:id>/', NoteRudView.as_view(), name='api-note-rud')
]
