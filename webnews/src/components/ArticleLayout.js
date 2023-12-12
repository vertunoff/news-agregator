import React, { useEffect, useState } from 'react'
import ArticleBoxContainer from './ArticleBoxContainer'
import ArticleBox from './ArticleBox'
import Article from './Article'
import axios from 'axios'
function ArticleLayout(props) {
    const [articles, setArticles] = useState([])
    const [isReady, setIsReady] = useState(false)
    let i =0
    useEffect(fetchArticles, [])
    function fetchArticles() {
        axios
            .get('http://127.0.0.1:8000/')
            .then(data => {
                setArticles(data.data.reverse())
        
                console.log()
                setIsReady(true)
            })
    }
    return isReady ? (
        <div className='article-layout'>
            <ArticleBoxContainer>
                <ArticleBox topic='ПОСЛЕДНИЕ'flex='2'>
                <div className='lovely-flex-box'>
                    <Article article={articles.filter(article=>article.topic==='ПОСЛЕДНИЕ')[0]} click={props.controllers.fullpage}></Article>
                    <Article article={articles.filter(article=>article.topic==='ПОСЛЕДНИЕ')[1]} click={props.controllers.fullpage}></Article>
                    </div>
                    <Article article={articles.filter(article=>article.topic==='ПОСЛЕДНИЕ')[4]} click={props.controllers.fullpage}></Article>
                </ArticleBox>
                <ArticleBoxContainer flex='1' >
                    <ArticleBox topic='В мире' direction='column'>
                        <Article article={articles.filter(article=>article.topic==='В МИРЕ')[0]} click={props.controllers.fullpage}></Article>
                        <Article article={articles.filter(article=>article.topic==='В МИРЕ')[1]} click={props.controllers.fullpage}></Article>
                        <Article article={articles.filter(article=>article.topic==='В МИРЕ')[2]} click={props.controllers.fullpage}></Article>
                    </ArticleBox>
                </ArticleBoxContainer>
            </ArticleBoxContainer>
            <ArticleBoxContainer>
                <ArticleBox direction='column' topic='Политика'>
                    <Article article={articles.filter(article=>article.topic==='ПОЛИТИКА')[0]} click={props.controllers.fullpage}></Article>
                    <Article article={articles.filter(article=>article.topic==='ПОЛИТИКА')[1]} click={props.controllers.fullpage}></Article>
                </ArticleBox>
                <ArticleBox topic='ЭКОНОМИКА' direction='column'>
                <Article article={articles.filter(article=>article.topic==='ЭКОНОМИКА')[2]} click={props.controllers.fullpage}></Article>
                <Article article={articles.filter(article=>article.topic==='ЭКОНОМИКА')[2]} click={props.controllers.fullpage}></Article>
                <Article article={articles.filter(article=>article.topic==='ЭКОНОМИКА')[2]} click={props.controllers.fullpage}></Article>

                </ArticleBox>
            </ArticleBoxContainer>
        </div>
    ) : ''
}

export default ArticleLayout