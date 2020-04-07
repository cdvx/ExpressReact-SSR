import React from 'react';
import Article from './Article'

export default ({articles})=> {
    return (
        <div>
            {Object.values(articles).map(article => 
                <Article 
                    key={article.id}
                    article={article}
                />
                )}
        </div>
    )
}