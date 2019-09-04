from django.db.models import Q
from rest_framework import generics, mixins
# from app.models import ScheduleBookPost
# from .serializers import ScheduleBookSerializer
from app.models import DayCard, DetailArrangement, TodoItem, Note
from .serializers import DayCardSerializer, DetailArrangementSerializer
from .serializers import TodoItemSerializer, NoteSerializer

#DayCard view
class DayCardListView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'id'
    serializer_class = DayCardSerializer

    def get_queryset(self):
        return DayCard.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class DayCardRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    serializer_class = DayCardSerializer

    def get_queryset(self):
        return DayCard.objects.all()


#DetailArrangement view
class DetailArrangementListView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = "id"
    serializer_class = DetailArrangementSerializer

    def get_queryset(self):
        return DetailArrangement.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class DetailArrangementDayKeyListView(generics.ListAPIView):
    lookup_field = "day_key"
    serializer_class = DetailArrangementSerializer

    def get_queryset(self):
        return DetailArrangement.objects.filter(day_key=self.kwargs["day_key"])

class DetailArrangementRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    serializer_class = DetailArrangementSerializer

    def get_queryset(self):
        return DetailArrangement.objects.all()

#TodoItem view
class TodoItemListView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'id'
    serializer_class = TodoItemSerializer

    def get_queryset(self):
        return TodoItem.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class TodoItemDayKeyListView(generics.ListAPIView):
    lookup_field = "day_key"
    serializer_class = TodoItemSerializer

    def get_queryset(self):
        return TodoItem.objects.filter(day_key=self.kwargs["day_key"])

class TodoItemRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    serializer_class = TodoItemSerializer

    def get_queryset(self):
        return TodoItem.objects.all()

#Note view
class NoteListView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'id'
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class NoteDayKeyListView(generics.ListAPIView):
    lookup_field = "day_key"
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(day_key=self.kwargs["day_key"])


class NoteRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all()

    
# class ScheduleBookRudView(generics.RetrieveUpdateDestroyAPIView):
#     lookup_field = 'pk'
#     serializer_class = ScheduleBookSerializer 

#     def get_queryset(self):
#         return ScheduleBookPost.objects.all()


# class ScheduleBookListView(mixins.CreateModelMixin, generics.ListAPIView):
#     lookup_field = 'pk'
#     serializer_class = ScheduleBookSerializer

#     def get_queryset(self):
#         qs = ScheduleBookPost.objects.all()
#         query = self.request.GET.get('q')

#         if query is not None:
#             qs = qs.filter(
#                 Q(title__contains=query) |
#                 Q(content__contains=query)
#             ).distinct()
#         return qs
    
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)