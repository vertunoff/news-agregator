import React from 'react'

function Article(props) {
    const time = /^([01]\d|2[0-3]):([0-5]\d)$/.test(props.article.date.slice(0, 5)) ? props.article.date.slice(0, 5) : props.article.date_created
    return (
        <div className='article'>
            <div className='article-title'>{props.article.title}</div>
            <div className='article-time'>{time}</div>
        </div>
    )
}

export default Article