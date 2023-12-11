import React, { useEffect, useState } from 'react'
import ArticleBoxContainer from './ArticleBoxContainer'
import ArticleBox from './ArticleBox'
import Article from './Article'
import axios from 'axios'
function ArticleLayout() {
    const [articles, setArticles] = useState([])
    const [isReady, setIsReady] = useState(false)
    let i = 90
    useEffect(fetchArticles, [])
    function fetchArticles() {
        axios
            .get('http://127.0.0.1:8000/')
            .then(data => {
                setArticles(data.data)
                setIsReady(true)
            })
    }
    return isReady ? (
        <div className='article-layout'>
        {console.log(articles[i].title)}
            <ArticleBoxContainer>
                <ArticleBox direction='column' topic='замечательные'>
                    <Article article={articles[i--]}></Article>
                    <Article article={articles[i--]}></Article>
                    <Article article={articles[i--]}></Article>
                </ArticleBox>
                <ArticleBoxContainer flex='2' >
                    <ArticleBox topic='о главном' direction='row'>
                        <Article article={articles[i--]}></Article>
                        <Article article={articles[i--]}></Article>
                        <Article article={articles[i--]}></Article>
                    </ArticleBox>
                </ArticleBoxContainer>
            </ArticleBoxContainer>
            <ArticleBoxContainer>
                <ArticleBox flex='2'>
                <div className='lovely-flex-box'>
                    <Article article={articles[i--]}></Article>
                    <Article article={articles[i--]}></Article>
                    </div>
                    <Article article={articles[i--]}></Article>

                </ArticleBox>
                <ArticleBox>
                <Article article={articles[i--]}></Article>
                <Article article={articles[i--]}></Article>
                <Article article={articles[i--]}></Article>

                </ArticleBox>
            </ArticleBoxContainer>
        </div>
    ) : ''
}

export default ArticleLayout