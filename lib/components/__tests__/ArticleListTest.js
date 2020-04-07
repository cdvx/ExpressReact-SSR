import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', ()=>{
    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        },
        store: {
        lookupAuthor: jest.fn(()=> ({}))
        }
    }
    it('It renders correclty', ()=> {
        const el = renderer.create(
            <ArticleList
            {...testProps}
            />
        ).toJSON();
        expect(el).toMatchSnapshot();
        expect(el.children.length).toBe(2)
    })
})

