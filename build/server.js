"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _server = _interopRequireDefault(require("./renderers/server"));

var _data = require("./data");

const app = (0, _express.default)();
app.use(_express.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
  const initialContent = await (0, _server.default)();
  await res.render('index', { ...initialContent
  });
});
app.get('/data', (req, res) => {
  return res.send(_data.data);
});
app.listen(_config.default.port, () => {
  console.info(`Running on port ${_config.default.port}`);
});