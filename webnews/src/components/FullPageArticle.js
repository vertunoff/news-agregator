import React, { useState } from 'react'

function FullPageArticle(props) {
  return (
    <div className='full-page-article'>
        <h3 onClick={props.controllers.initial}>На главную</h3>
        <h1 >{props.article.title}</h1>
        <div className='image-container'>
          <img src={props.article.photo} alt='noir'></img>
        </div>
        {((props.article.text.split("@@@@@")).map(item => <p>{item}</p>))}
        
    </div>
  )
}

export default FullPageArticle