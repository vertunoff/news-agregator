import React from 'react'

function ArticleBoxContainer(props) {
  return (
    <div className={'article-box-container'} style={{flexDirection: props.direction, flex: props.flex}}>
        {props.children}
    </div>
  )
}

export default ArticleBoxContainer