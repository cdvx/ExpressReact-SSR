"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _ArticleList = _interopRequireDefault(require("../ArticleList"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a',
        "title": "a",
        "date": "a",
        "body": "a"
      },
      b: {
        id: 'b',
        "title": "b",
        "date": "b",
        "body": "b"
      }
    }
  };
  it('It renders correclty', () => {
    const wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ArticleList.default, testProps));
    expect(wrapper.find('ArticleContainer').length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });
});