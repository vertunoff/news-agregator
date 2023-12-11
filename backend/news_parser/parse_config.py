article_parse_config = {
    'ria_article':
        {
            'title_tag': 'div',
            'title_class': 'article__title',
            'time_tag': 'div',
            'time_class' :'article__info-date',
            'text_tag':('div', 'div'),
            'text_class': ('article__text', 'article__quote-text m-small'),
            'photo_tag': 'div', 
            'photo_class': 'photoview__open'
        },
    'lenta_article':
        {
            'title_tag': 'span',
            'title_class': 'topic-body__title',
            'time_tag': 'a',
            'time_class' :'topic-header__item topic-header__time',
            'text_tag':('p',),
            'text_class': ('topic-body__content-text', ),
            'photo_tag': 'a', 
            'photo_class': 'topic-body__title-image-zoom'
        },
    'dota2ru_article':
        {
            'title_tag': 'h1',
            'title_class': 'title-global',
            'time_tag': 'p',
            'time_class' :'forum-theme__top-block-time',
            'text_tag':('span', 'div'),
            'text_class': ('inserted-link inserted-link--tournament', 'global-content p-content js-text-errors-wrap'),
            'photo_tag': 'div',
            'photo_class': 'global-content p-content js-text-errors-wrap'
        },
    'dota2net_article':
        {
            'title_tag': 'div',
            'title_class': 'post-content',
            'time_tag': 'div',
            'time_class' :'post-arround__datee',
            'text_tag':'div',
            'text_class': 'post-content',
            'photo_tag': 'div',
            'photo_class': 'post-picture__intro'
        },
}


link_parse_config = {
    'РИА' : {
        'homeurl': 'https://ria.ru',
        'последние':{
            'url': 'https://ria.ru/',
            'link_tag': 'a',
            'link_class_name': 'cell-list__item-link color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
        'политика':{
            'url': 'https://ria.ru/politics/',
            'link_tag': 'a',
            'link_class_name': 'list-item__title color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
        'экономика':{
            'url': 'https://ria.ru/economy/',
            'link_tag': 'a',
            'link_class_name': 'list-item__title color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
        'в мире':{
            'url': 'https://ria.ru/world/',
            'link_tag': 'a',
            'link_class_name': 'list-item__title color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
        'общество':{
            'url': 'https://ria.ru/society/',
            'link_tag': 'a',
            'link_class_name': 'list-item__title color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
        'происшествия':{
            'url': 'https://ria.ru/incidents/',
            'link_tag': 'a',
            'link_class_name': 'list-item__title color-font-hover-only',
            'article': article_parse_config['ria_article']
        },
    },
    'Лента.ру':{
        'homeurl': 'https://lenta.ru',
        'последние':{
            'url': 'https://lenta.ru/',
            'link_tag': 'a',
            'link_class_name': 'card-mini _topnews',
            'article': article_parse_config['lenta_article']
        }
    },
    'Дота2.ру':{
            'homeurl': 'https://dota2.ru',
            'Киберспорт':{
                'url': 'https://dota2.ru/news/',
                'link_tag': 'a',
                'link_class_name': 'index__news-link game-icon js-game-icon',
                'article': article_parse_config['dota2ru_article']
            }
        },
    'Дота2.net':{
            'homeurl': 'https://dota2.net',
            'Киберспорт':{
                'url': 'https://dota2.net/allnews',
                'link_tag': 'a',
                'link_class_name': 'news-item__picture',
                'article': article_parse_config['dota2net_article']
            }
        },
}