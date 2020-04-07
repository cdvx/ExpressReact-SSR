import React from 'react';
import Article from './Article'

export default ({articles, store})=> {
    return (
        <div>
            {Object.values(articles).map(article => 
                <Article 
                    key={article.id}
                    article={article}
                    store={store}
                />
                )}
        </div>
    )
}