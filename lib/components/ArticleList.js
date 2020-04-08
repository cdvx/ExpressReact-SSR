import React from 'react';
import Article from './Article'
import isEqual from 'lodash.isequal';


export default class ArticlesList extends React.PureComponent{
    render(){
        return (
            <div>
                {Object.values(this.props.articles).map(article => 
                    <Article 
                        key={article.id}
                        article={article}
                    />
                    )}
            </div>
        )

    }
}
