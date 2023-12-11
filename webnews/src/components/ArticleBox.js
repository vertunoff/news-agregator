import React from 'react'

function ArticleBox(props) {
    return (
        <div className='article-box' style={{flexDirection: props.direction, flex: props.flex}}>
            <div className='article-topic'>{props.topic}</div>

            {props.children}
        </div>
    )
}

export default ArticleBox