import React from 'react';
import Article from './Article'

export default ({articles, articleActions})=> {
    return (
        <div>
            {Object.values(articles).map(article => 
                <Article 
                    key={article.id}
                    article={article}
                    actions={articleActions}
                />
                )}
        </div>
    )
}