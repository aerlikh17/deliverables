# Generated by Django 4.1.3 on 2022-11-18 19:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0002_widget_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='widget',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
    ]
