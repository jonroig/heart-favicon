'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var heartFavicon = (0, _serveFavicon2['default'])('./node_modules/heart-favicon/favicon.ico');

exports['default'] = heartFavicon;
module.exports = exports['default'];