# Generated by Django 3.2.19 on 2023-06-07 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='user',
            name='sid',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
