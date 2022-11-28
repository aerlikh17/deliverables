from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('movies/', views.movies_index, name='index'),
    path('movies/<int:movie_id>/', views.movies_detail, name='detail'),
    path('movies/create/', views.MovieCreate.as_view(), name='movies_create'),
    path('movies/<int:pk>/update/', views.MovieUpdate.as_view(), name='movies_update'),
    path('movies/<int:pk>/delete/', views.MovieDelete.as_view(), name='movies_delete'),
    path('movies/<int:movie_id>/add_rating/', views.add_rating, name='add_rating'),
     # associate a toy with a cat (M:M)
    path('movies/<int:movie_id>/assoc_actor/<int:actor_id>/', views.assoc_actor, name='assoc_actor'),
    # unassociate a toy and cat
    path('movies/<int:movie_id>/unassoc_actor/<int:actor_id>/', views.unassoc_actor, name='unassoc_actor'),
    path('actors/', views.ActorList.as_view(), name='actors_index'),
    path('actors/<int:pk>/', views.ActorDetail.as_view(), name='actors'),
    path('actors/create/', views.ActorCreate.as_view(), name='actors_create'),
    path('actors/<int:pk>/update/', views.ActorUpdate.as_view(), name='actors_update'),
    path('actors/<int:pk>/delete/', views.ActorDelete.as_view(), name='actors_delete'),
]