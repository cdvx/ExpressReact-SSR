"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("../components/App"));

var _DataApi = _interopRequireDefault(require("../DataApi"));

const store = new _DataApi.default(window.initialData);

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_App.default, {
  store: store
}), document.getElementById('root'));