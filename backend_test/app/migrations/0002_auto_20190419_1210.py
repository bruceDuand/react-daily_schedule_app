# Generated by Django 2.1.7 on 2019-04-19 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='note_content',
        ),
        migrations.AddField(
            model_name='detailarrangement',
            name='time',
            field=models.CharField(default=0, max_length=5),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='note',
            name='note',
            field=models.TextField(default='write some notes here'),
        ),
    ]
