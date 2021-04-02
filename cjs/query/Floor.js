'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Floor

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The greatest integer that is less than or equal to the number
 * @return {Expr}
 */
function Floor(expr) {
  _common.arity.exact(1, arguments, Floor.name)

  return new _Expr.default({
    floor: (0, _common.wrap)(expr),
  })
}
