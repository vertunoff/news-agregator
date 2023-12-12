import React, { useState } from 'react'

function FullPageArticle(props) {
  const time = /^([01]\d|2[0-3]):([0-5]\d)$/.test(props.article.date.slice(0, 5)) ? props.article.date.slice(0, 5) : props.article.date_created
  return (
    <div className='full-page-article'>
      <h3 onClick={props.controllers.initial}>На главную</h3>
      <div className='image-container'>
        <div className='full-page-article-topic'>
          <h1 >{props.article.title}</h1>
        </div>
        <img src={props.article.photo} alt='noir'></img>
      </div>
      <div className='source'>
        <a href={props.article.url} target='_blank'>{props.article.resource_name}, {time}</a>
        </div>
      {((props.article.text.split("@@@@@")).map(item => <p>{item}</p>))}

    </div>
  )
}

export default FullPageArticle