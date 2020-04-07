"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
  this.data = {
    articles: this.mapIntoObject(data.articles),
    authors: this.mapIntoObject(data.authors)
  };
};

exports["default"] = StateApi;