import React from 'react';
import ArticleList from '../ArticleList';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('ArticleList', ()=>{
    const testProps = {
        articles: {
            a: {id: 'a', "title": "a", "date": "a", "body": "a"},
            b: {id: 'b', "title": "b", "date": "b", "body": "b"}
        }
    }
    it('It renders correclty', ()=> {
        const wrapper = shallow(
            <ArticleList
            {...testProps}
            />
        )
        expect(wrapper.find('ArticleContainer').length).toEqual(2)
        expect(wrapper).toMatchSnapshot();
     })
})

