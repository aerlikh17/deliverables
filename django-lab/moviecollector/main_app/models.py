from django.db import models
from django.urls import reverse

RATINGS = ((
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
    ('6', '6'),
    ('7', '7'),
    ('8', '8'),
    ('9', '9'),
    ('10', '10'),
))


# Create your models here.

class Actor(models.Model):
  name = models.CharField(max_length=50)
  age = models.IntegerField()

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('actors_detail', kwargs={'pk': self.id})

class Movie(models.Model):
    name = models.CharField(max_length=100)
    year = models.IntegerField()
    genre = models.CharField(max_length=100)
    actors = models.ManyToManyField(Actor)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('detail', kwargs={'movie_id': self.id})

class Rating(models.Model):
    date=models.DateField('rating date')
    description = models.TextField(max_length=250)
    ratings = models.CharField(
        max_length=2,
        choices=RATINGS,
        default=RATINGS[0][0]
    )

    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.get_ratings_display()} on {self.date}"

    class Meta:
        ordering = ['-date']
