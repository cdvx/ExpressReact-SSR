"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WithStore = _interopRequireDefault(require("./WithStore"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

const styles = {
  article: {
    paddingBottom: 10,
    borderBottom: '1px solid #aaa',
    marginBottom: 10
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
};

const dateDisplay = dateString => new Date(dateString).toDateString();

class Article extends _react.default.PureComponent {
  render() {
    const {
      store,
      article
    } = this.props;
    let author = store.lookupAuthor(article.authorId);
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.article
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.title
    }, article.title), /*#__PURE__*/_react.default.createElement("div", {
      style: styles.date
    }, dateDisplay(article.date)), /*#__PURE__*/_react.default.createElement("div", {
      style: styles.author
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: author.website
    }, author.firstname, " ", author.lastName)), /*#__PURE__*/_react.default.createElement("div", {
      style: styles.body
    }, article.body));
  }

}

Article.propTypes = {
  article: _propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    date: _propTypes.default.string.isRequired,
    body: _propTypes.default.string.isRequired
  })
};

const extraProps = (store, originalProps) => {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
};

var _default = (0, _WithStore.default)(extraProps)(Article);

exports.default = _default;