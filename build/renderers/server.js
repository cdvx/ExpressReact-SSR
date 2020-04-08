"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("../config"));

var _DataApi = _interopRequireDefault(require("../DataApi"));

var _App = _interopRequireDefault(require("../components/App"));

var _default = async () => {
  const res = await _axios.default.get(`http://${_config.default.host}:${_config.default.port}/data`);
  const store = new _DataApi.default(res.data);
  return {
    initialMarkUp: _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_App.default, {
      store: store
    })),
    initialData: res.data
  };
};

exports.default = _default;