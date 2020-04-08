"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

// const useForceUpdate =()=> {
//     const [x, setState] = useState(null)
//     return setState
// }
var _default = (extraProps = () => {}) => Component => {
  var _class, _temp;

  return _temp = _class = class extends _react.default.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "state", this.usedState());
      (0, _defineProperty2.default)(this, "onStoreChange", () => {
        this.setState(this.usedState());
      });
    }

    usedState() {
      return extraProps(this.context.store, this.props);
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unSubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    shouldComponentUpdate(nextprops, nextState) {
      return !(0, _lodash.default)(nextprops, this.props) || !(0, _lodash.default)(nextState, this.state);
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, this.props, this.usedState(), {
        store: this.context.store
      }));
    }

  }, (0, _defineProperty2.default)(_class, "displayName", `${Component.name}Container`), (0, _defineProperty2.default)(_class, "contextTypes", {
    store: _propTypes.default.object
  }), _temp;
};

exports.default = _default;