# Generated by Django 2.1.7 on 2019-04-20 07:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20190419_1637'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedulebookpost',
            name='user',
        ),
        migrations.DeleteModel(
            name='ScheduleBookPost',
        ),
    ]
