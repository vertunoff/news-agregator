import React from 'react'
import '../styles/main.css'
import Header from './Header'
import Clock from './Clock'
import ArticleLayout from './ArticleLayout'

function MainContent() {
    return (
        <div className='main-content-container'>
            <Header></Header>
            <div className='main-content'>
                <div className='left-bar'>
                    <div className='ad'></div>
                    <Clock></Clock>
                    <div className='ad' style={{flex: '2'}}></div>
                </div>
                <ArticleLayout></ArticleLayout>
            </div>
        </div>
    )
}

export default MainContent