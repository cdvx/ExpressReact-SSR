"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _DataApi = _interopRequireDefault(require("../DataApi"));

var _data = require("../data.json");

const store = new _DataApi.default(_data.data);
describe('StateApi', () => {
  it('exposes articles as an object', () => {
    const {
      articles
    } = store.getState();
    const articleId = _data.data.articles[0].id;
    const articleTitle = _data.data.articles[0].title;
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', () => {
    const {
      authors
    } = store.getState();
    const authorId = _data.data.authors[0].id;
    const authorFirstName = _data.data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});