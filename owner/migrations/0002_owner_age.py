# Generated by Django 2.2.4 on 2020-04-12 05:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('owner', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='owner',
            name='age',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
