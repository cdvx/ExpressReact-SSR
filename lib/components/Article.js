import React from 'react';
import PropTypes from 'prop-types';
import WithStore from './WithStore';
import isEqual from 'lodash.isequal';


const styles = {
    article: {
        paddingBottom: 10,
        borderBottom: '1px solid #aaa',
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: '0.85em',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10
    },
    body: {
        paddingLeft: 20
    }

}
const dateDisplay=(dateString)=>  new Date(dateString).toDateString();

class Article extends React.Component {
    shouldComponentUpdate(nextprops, nextState){
        return !isEqual(nextprops, this.props)
    }
    render(){
        const {store, article} = this.props;
        let author = store.lookupAuthor(article.authorId);
        return (
            <div style={styles.article}>
            <div style={styles.title}>{article.title}</div>
            <div style={styles.date}>
                {dateDisplay(article.date)}
            </div>
            <div style={styles.author}>
                <a href={author.website}>
                    {author.firstname} {author.lastName}
                </a>
            </div>
            <div style={styles.body}>{article.body}</div>
        </div>
        )
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}

const extraProps =(store, originalProps)=> {
    return {
        author: store.lookupAuthor(originalProps.article.authorId),
    }
}

export default WithStore(extraProps)(Article);