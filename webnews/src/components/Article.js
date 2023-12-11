import React from 'react'

function Article(props) {
    return (
        <div className='article'>
            <div className='article-title'>{props.title}</div>
            <div className='article-time'>{props.time}</div>
        </div>
    )
}

export default Article