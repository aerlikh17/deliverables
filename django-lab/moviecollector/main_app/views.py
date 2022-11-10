from django.shortcuts import render
from django.http import HttpResponse

class Movie:
    def __init__(self, name, year, genre):
        self.name = name
        self.year = year
        self.genre = genre

movies = [
    Movie('Black Panther', 2022, 'Action'),
    Movie('Smile', 2022, 'Horror'),
]

# Create your views here.
def home(request):
    return HttpResponse('<h1>Hello /ᐠ.‸.ᐟ\ﾉ</h1>')

def about(request):
    return render(request, 'about.html')

def movies_index(request):
    return render(request, 'movies/index.html', { 'movies': movies })