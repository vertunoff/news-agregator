from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *
from news_parser.article_parser import *
def start_app():
    links = (get_links(link_parse_config, 'Лента.ру', 'последние'))
    if not Article.objects.filter(url = links[0]).exists():
        lastarticle= get_article(links[0], link_parse_config, 'Лента.ру', 'последние')
        article = Article(**lastarticle)
        article.save()
        print('article saved')
    else:
        print('it was already')
# Create your views here.
class ArticleView(APIView):
    def get(self, request):
        output = [{"url": output.url, "title": output.title, "resource_name": output.resource_name, "date":output.date, "topic": output.topic.upper(), "photo": output.photo, "text": output.text, "date_created":(lambda x: f'{x.time().hour}:{x.time().minute if x.time().minute > 9 else '0'+str(x.time().minute)}')(output.date_created)} for output in Article.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)