"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _UseDebounce = _interopRequireDefault(require("./UseDebounce"));

var _WithStore = _interopRequireDefault(require("./WithStore"));

const SearchBar = ({
  store
}) => {
  const [searchInput, setInput] = (0, _react.useState)('');
  const debouncedSearchTerm = (0, _UseDebounce.default)(searchInput, 500);
  (0, _react.useEffect)(() => {
    store.setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, store]);

  const handleSearch = e => {
    setInput(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    // ref={input => searchInput = input}
    type: "search",
    placeholder: "Enter search term",
    value: searchInput,
    onChange: handleSearch
  });
};

var _default = (0, _WithStore.default)()(SearchBar);

exports.default = _default;