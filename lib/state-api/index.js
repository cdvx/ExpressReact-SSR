 
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StateApi = function StateApi(data) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, StateApi);
  (0, _defineProperty2["default"])(this, "mapIntoObject", function (arr) {
    return arr.reduce(function (acc, curr) {
      acc[curr.id] = curr;
      return acc;
    }, {});
  });
  (0, _defineProperty2["default"])(this, "lookupAuthor", function (authorId) {
    return _this.data.authors[authorId];
  });
  (0, _defineProperty2["default"])(this, "getState", function () {
    return _this.data;
  });
  (0, _defineProperty2["default"])(this, "subscribe", function (cb) {
    _this.lastSubscriptionId++;
    _this.subscriptions[_this.lastSubscriptionId] = cb;
    return _this.lastSubscriptionId;
  });
  (0, _defineProperty2["default"])(this, "unSubscribe", function (SubscriptionId) {
    delete _this.subscriptions[SubscriptionId];
  });
  (0, _defineProperty2["default"])(this, "mergeWithState", function (stateChange) {
    _this.data = _objectSpread({}, _this.data, {}, stateChange);

    _this.notifySubscribers();
  });
  (0, _defineProperty2["default"])(this, "setSearchTerm", function (searchTerm) {
    // this.data.searchTerm = searchTerm;
    _this.mergeWithState({
      searchTerm: searchTerm
    });
  });
  (0, _defineProperty2["default"])(this, "notifySubscribers", function () {
    Object.values(_this.subscriptions).forEach(function (cb) {
      return cb();
    });
  });
  (0, _defineProperty2["default"])(this, "startClock", function () {
    setInterval(function () {
      _this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  });
  this.data = {
    articles: this.mapIntoObject(data.articles),
    authors: this.mapIntoObject(data.authors),
    searchTerm: '',
    timestamp: new Date()
  };
  this.subscriptions = {};
  this.lastSubscriptionId = 0;
};

exports["default"] = StateApi;
