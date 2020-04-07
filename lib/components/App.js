import React, { useState } from 'react';
import isEmpty from 'lodash.isempty';
import ArticlesList from './ArticleList';

export const StoreContext = React.createContext({})

export default ({store}) => {
    const [{articles}, _] = useState(store.getState())

    return (
        <>
        {isEmpty(articles) ? <>Hello</> : 
        <StoreContext.Provider value={store}>
            <ArticlesList
                articles={articles}
            />
        </StoreContext.Provider>
        }
        </>
    );
};