import React, { useState, useEffect } from 'react';
import DataApi from 'state-api';
// import { data } from '../data';
import isEmpty from 'lodash.isempty';
import ArticlesList from './ArticleList';


export default ({store}) => {
    const [{articles, authors}, _] = useState(store.getState())

    return (
        <>
        {isEmpty(articles) ? <>Hello</> : <ArticlesList
            articles={articles}
            store={store}
        />}
        </>
    );
};