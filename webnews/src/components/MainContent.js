import React, { useState } from 'react'
import '../styles/main.css'
import Header from './Header'
import Clock from './Clock'
import ArticleLayout from './ArticleLayout'
import FullPageArticle from './FullPageArticle'

function MainContent() {
    const [pageState, setPageState]  = useState('initial');
    const [article, setArticle] = useState({})
    function openArticle(article){
        setPageState('fullpage')
        setArticle(article)
    }
    function closeArticle(){
        setPageState('initial')
        setArticle({})
    }
    const controllers = {fullpage: openArticle, initial: closeArticle}
    return (
        <div className='main-content-container'>
            <Header></Header>
            <div className='main-content'>
                <div className='left-bar'>
                    <div className='ad'></div>
                    <Clock></Clock>
                    <div className='ad' style={{flex: '2'}}></div>
                </div>
                {pageState==='initial'? 
                <ArticleLayout controllers={controllers}></ArticleLayout>
                :pageState==='fullpage'?
                <FullPageArticle article={article} controllers={controllers}></FullPageArticle>
                :''}
            </div>
        </div>
    )
}

export default MainContent