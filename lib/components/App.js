import React, { useState } from 'react';
import DataApi from 'state-api';
import { data } from '../data';
import ArticlesList from './ArticleList';

const api = new DataApi(data)

export default () => {
    const [articles, setArticles] = useState(api.getArticles())
    const [authors, setAuthors] = useState(api.getAuthors())

    const articleActions = {
        lookupAuthor: authorId => authors[authorId]
    }

    return (
        <ArticlesList
            articles={articles}
            articleActions={articleActions}
        />
    );
};