from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from .forms import RatingForm
from .models import Movie, Actor

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def movies_index(request):
    movie = Movie.objects.all()
    return render(request, 'movies/index.html', { 'movies': movie })

def movies_detail(request, movie_id):
    movie = Movie.objects.get(id=movie_id)
    actors_movie_doesnt_have = Actor.objects.exclude(id__in = movie.actors.all().values_list('id'))
    rating_form = RatingForm()
    return render(request, 'movies/detail.html', { 'movie': movie, 'rating_form': rating_form, 'actors': actors_movie_doesnt_have})

class MovieCreate(CreateView):
    model = Movie
    fields = '__all__'

class MovieUpdate(UpdateView):
    model = Movie
    fields = ['year', 'genre']

class MovieDelete(DeleteView):
    model = Movie
    success_url = '/movies/'

def add_rating(request, movie_id):
    form = RatingForm(request.POST)
    # validate the form
    if form.is_valid():
    # don't save the form to the db until it
    # has the cat_id assigned
        new_rating = form.save(commit=False)
        new_rating.movie_id = movie_id
        new_rating.save()
    return redirect('detail', movie_id=movie_id)

def assoc_actor(request, movie_id, actor_id):
  Movie.objects.get(id=movie_id).actors.add(actor_id)
  return redirect('detail', movie_id=movie_id)

def unassoc_actor(request, movie_id, actor_id):
  Movie.objects.get(id=movie_id).actors.remove(actor_id)
  return redirect('detail', movie_id=movie_id)

class ActorList(ListView):
  model = Actor

class ActorDetail(DetailView):
  model = Actor

class ActorCreate(CreateView):
  model = Actor
  fields = ['name', 'age']

class ActorUpdate(UpdateView):
  model = Actor
  fields = ['name', 'age']

class ActorDelete(DeleteView):
  model = Actor
  success_url = '/actors/'
