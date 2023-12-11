import React from 'react'
import ArticleBoxContainer from './ArticleBoxContainer'
import ArticleBox from './ArticleBox'
import Article from './Article'
function ArticleLayout() {
    return (
        <div className='article-layout'>
            <ArticleBoxContainer>
                <ArticleBox direction='row' flex='2' topic='замечательные'>
                    <Article title='При пожаре бабах' time='12:89' ></Article>
                    <Article title='Аниме' time='15:01' ></Article>
                    <Article title='Аниме' time='15:01' ></Article>
                </ArticleBox>
                <ArticleBoxContainer>
                    <ArticleBox topic='о главном'>
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

                </ArticleBox>
                <ArticleBox></ArticleBox>
            </ArticleBoxContainer>
        </div>
    )
}

export default ArticleLayout