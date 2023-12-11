from news_parser.article_parser import *
from main.models import *


def main():
    print("server started")
    for site in link_parse_config:
        failed = 0
        try:
            for category in link_parse_config[site]:
                print(site)
                if category == "homeurl":
                    continue
                if failed > 2:
                    break
                links = get_links(link_parse_config, site, category)
                for link in links:
                    if failed > 2:
                        break
                    if not Article.objects.filter(url=link).exists():
                        try:
                            article = get_article(
                                link, link_parse_config, site, category
                            )
                            article = Article(**article)
                            article.save()
                            break
                        except:
                            failed += 1
                            print("failed parsing article")
        except:
            print("failed parsing source")
