"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _WithStore = _interopRequireDefault(require("./WithStore"));

class Timestamp extends _react.default.Component {
  static dateDisplay(timestamp) {
    return timestamp.toLocaleTimeString([], {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, this.props.timestampDisplay);
  }

}

const extraProps = store => {
  return {
    timestampDisplay: Timestamp.dateDisplay(store.getState().timestamp)
  };
};

var _default = (0, _WithStore.default)(extraProps)(Timestamp);

exports.default = _default;