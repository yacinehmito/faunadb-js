'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Tokens

var _Expr = _interopRequireDefault(require('../Expr'))

var _util = require('../_util')

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `tokens` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the token set's scope.
 * @return {Expr}
 */
function Tokens(scope) {
  _common.arity.max(1, arguments, Tokens.name)

  scope = (0, _util.defaults)(scope, null)
  return new _Expr.default({
    tokens: (0, _common.wrap)(scope),
  })
}
