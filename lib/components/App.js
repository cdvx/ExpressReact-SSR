import React from 'react';
import ArticlesList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp'
import pickBy from 'lodash.pickby'
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

export default class App extends React.Component {
    
    // subscribe callback to listen
    // for state changes on the store object
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext(){
        return {
            store: this.props.store
        }
    }

    appState = () => {
        const { articles, searchTerm } = this.props.store.getState();
        return {articles, searchTerm }
    }
    state = this.appState()

    onStoreChange = () => {
        this.setState(this.appState())
    }

    componentDidMount(){
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
        this.props.store.startClock()

    }
    componentWillUnmount(){
        this.props.store.unSubscribe(this.subscriptionId)

    }
    shouldComponentUpdate(nextprops, nextState){
        return !isEqual(nextState.searchTerm, this.state.searchTerm)
        || !isEqual(nextState.articles, this.state.articles)
    }

    searchItems = () =>{
        let articles = this.state.articles;
        const searchRE = new RegExp(this.state.searchTerm, 'i');
        articles = pickBy(articles, value=>{
            return value.title.match(searchRE) || value.body.match(searchRE);
        })
        return articles
    }

    render(){
        let articles = this.searchItems(this.state)
        return (
            <>
                <TimeStamp />
                <SearchBar />
                <ArticlesList
                    articles={articles}
                />
            </>
        );
    }
};
