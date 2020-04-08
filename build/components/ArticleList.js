"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Article = _interopRequireDefault(require("./Article"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

class ArticlesList extends _react.default.PureComponent {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, Object.values(this.props.articles).map(article => /*#__PURE__*/_react.default.createElement(_Article.default, {
      key: article.id,
      article: article
    })));
  }

}

exports.default = ArticlesList;