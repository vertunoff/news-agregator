import React from 'react'
import ArticleBoxContainer from './ArticleBoxContainer'
import ArticleBox from './ArticleBox'
import Article from './Article'
function ArticleLayout() {
    return (
        <div className='article-layout'>
            <ArticleBoxContainer>
                <ArticleBox direction='column' topic='замечательные'>
                    <Article title='При пожаре бабах' time='12:89' ></Article>
                    <Article title='Аниме' time='15:01' ></Article>
                    <Article title='Аниме' time='15:01' ></Article>
                </ArticleBox>
                <ArticleBoxContainer flex='2' >
                    <ArticleBox topic='о главном' direction='row'>
                        <Article title='Путин' time='18:59'></Article>
                        <Article title='Путин' time='18:59'></Article>
                        <Article title='Путин' time='18:59'></Article>
                    </ArticleBox>
                </ArticleBoxContainer>
            </ArticleBoxContainer>
            <ArticleBoxContainer>
                <ArticleBox flex='2'>
                <Article title='При пожаре бабах' time='12:89' ></Article>
                <Article title='При пожаре бабах' time='12:89' ></Article>
                <Article title='При пожаре бабах' time='12:89' ></Article>

                </ArticleBox>
                <ArticleBox>
                <Article title='При пожаре бабах' time='12:89' ></Article>
                <Article title='При пожаре бабах' time='12:89' ></Article>
                <Article title='При пожаре бабах' time='12:89' ></Article>
                <Article title='При пожаре бабах' time='12:89' ></Article>

                </ArticleBox>
            </ArticleBoxContainer>
        </div>
    )
}

export default ArticleLayout