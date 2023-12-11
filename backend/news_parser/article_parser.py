import requests
import bs4
from bs4 import BeautifulSoup
from .parse_config import *
def getBS(url):
    response = requests.get(url)
    return BeautifulSoup(response.text, "html.parser")



    
def get_links(config, resource, topic):
    home=config[resource]['homeurl']
    config = config[resource][topic]
    url, link_tag, link_class_name = config['url'], config['link_tag'], config['link_class_name']
    document = getBS(url)
    links =[link['href'] if home in link['href'] else home+link['href'] for link in document.find_all(link_tag, {'class': link_class_name})]
    print('links got')
    return links

def get_article(url, config, resource, topic):
    home=config[resource]['homeurl']
    title_tag, title_class, time_tag, time_class, text_tags, text_classes, photo_tag, photo_class = config[resource][topic]['article'].values()
    document = getBS(url)
    try:
        title = document.find(title_tag, {'class':title_class}).get_text()
        time = document.find(time_tag, {'class': time_class})
        if len(time.contents) > 1:
            time = time.contents[0].get_text()
        else:
            time = time.get_text()
        try:
            photo = document.find(photo_tag, {photo_class}).find('img')['src']
            print(photo)
            if home not in photo:
                photo = home + photo
        except:
            photo='none'
        parapgraphs = []
        for element_group in [document.find_all(tag, {'class' : class_name}) for tag, class_name in zip(text_tags, text_classes)]:
            for element in element_group:
                parapgraphs.append(element.get_text())
        print('article parsed')
        return {'url': url, 'title': title, 'resource_name': resource, 'topic': topic, 'photo': photo, 'text': parapgraphs, 'date': time}
    except:
        raise Exception('parsing failed')