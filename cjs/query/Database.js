'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = Database

var _Expr = _interopRequireDefault(require('../Expr'))

var _common = require('./common')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the database.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the database's scope.
 * @return {Expr}
 */
function Database(name, scope) {
  _common.arity.between(1, 2, arguments, Database.name)

  switch (arguments.length) {
    case 1:
      return new _Expr.default({
        database: (0, _common.wrap)(name),
      })

    case 2:
      return new _Expr.default({
        database: (0, _common.wrap)(name),
        scope: (0, _common.wrap)(scope),
      })
  }
}
