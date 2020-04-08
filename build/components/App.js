"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _ArticleList = _interopRequireDefault(require("./ArticleList"));

var _SearchBar = _interopRequireDefault(require("./SearchBar"));

var _TimeStamp = _interopRequireDefault(require("./TimeStamp"));

var _lodash = _interopRequireDefault(require("lodash.pickby"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

class App extends _react.default.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "appState", () => {
      const {
        articles,
        searchTerm
      } = this.props.store.getState();
      return {
        articles,
        searchTerm
      };
    });
    (0, _defineProperty2.default)(this, "state", this.appState());
    (0, _defineProperty2.default)(this, "onStoreChange", () => {
      this.setState(this.appState());
    });
    (0, _defineProperty2.default)(this, "searchItems", () => {
      let articles = this.state.articles;
      const searchRE = new RegExp(this.state.searchTerm, 'i');
      articles = (0, _lodash.default)(articles, value => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
      return articles;
    });
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unSubscribe(this.subscriptionId);
  }

  shouldComponentUpdate(nextprops, nextState) {
    return !(0, _lodash2.default)(nextState.searchTerm, this.state.searchTerm) || !(0, _lodash2.default)(nextState.articles, this.state.articles);
  }

  render() {
    let articles = this.searchItems(this.state);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TimeStamp.default, null), /*#__PURE__*/_react.default.createElement(_SearchBar.default, null), /*#__PURE__*/_react.default.createElement(_ArticleList.default, {
      articles: articles
    }));
  }

}

exports.default = App;
(0, _defineProperty2.default)(App, "childContextTypes", {
  store: _propTypes.default.object
});
;