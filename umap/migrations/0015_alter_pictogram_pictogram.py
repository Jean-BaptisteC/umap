# Generated by Django 4.2.2 on 2023-10-30 11:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("umap", "0014_map_created_at"),
    ]

    operations = [
        migrations.AlterField(
            model_name="pictogram",
            name="pictogram",
            field=models.FileField(upload_to="pictogram"),
        ),
    ]