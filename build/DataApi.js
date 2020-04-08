"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

class StateApi {
  constructor(data) {
    (0, _defineProperty2.default)(this, "mapIntoObject", arr => {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    });
    (0, _defineProperty2.default)(this, "lookupAuthor", authorId => {
      return this.data.authors[authorId];
    });
    (0, _defineProperty2.default)(this, "getState", () => this.data);
    (0, _defineProperty2.default)(this, "subscribe", cb => {
      this.lastSubscriptionId++;
      this.subscriptions[this.lastSubscriptionId] = cb;
      return this.lastSubscriptionId;
    });
    (0, _defineProperty2.default)(this, "unSubscribe", SubscriptionId => {
      delete this.subscriptions[SubscriptionId];
    });
    (0, _defineProperty2.default)(this, "mergeWithState", stateChange => {
      this.data = { ...this.data,
        ...stateChange
      };
      this.notifySubscribers();
    });
    (0, _defineProperty2.default)(this, "setSearchTerm", searchTerm => {
      // this.data.searchTerm = searchTerm;
      this.mergeWithState({
        searchTerm
      });
    });
    (0, _defineProperty2.default)(this, "notifySubscribers", () => {
      Object.values(this.subscriptions).forEach(cb => cb());
    });
    (0, _defineProperty2.default)(this, "startClock", () => {
      setInterval(() => {
        this.mergeWithState({
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
  }

}

exports.default = StateApi;