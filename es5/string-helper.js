'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.renameKeys = renameKeys;
exports.pascalCase = pascalCase;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function renameKeys(data) {
  var fn = arguments.length <= 1 || arguments[1] === undefined ? _lodash2['default'].snakeCase : arguments[1];

  var finalData = typeof data !== 'object' || typeof data === 'undefined' || data === null;

  if (finalData) {
    return data;
  }

  var result = {};
  var keys = Object.keys(data);

  keys.forEach(function (key) {
    result[fn(key)] = renameKeys(data[key]);
  });

  return result;
}

function pascalCase(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return _lodash2['default'].capitalize(_lodash2['default'].camelCase(str));
}
//# sourceMappingURL=string-helper.js.map
