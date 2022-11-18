from django.shortcuts import render, redirect
from .models import Widget
from .forms import WidgetForm

# Create your views here.
def index(request):
    widget_list = Widget.objects.all()
    widget_form = WidgetForm()
    return render(request, 'index.html', {'widgets': widget_list, 'widget_form': widget_form, 'widget_list': widget_list})
    
def add_widget(request):
    new_widget = Widget.objects.create(
        description = request.POST['description'],
        quantity = request.POST['quantity']
    )
    new_widget.save()
    return redirect('index')

def delete_widget(request, widget_id):
    widget = Widget.objects.get(id=widget_id)
    widget.delete()
    return redirect('index')

