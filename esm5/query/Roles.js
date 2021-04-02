import Expr from '../Expr'
import { defaults } from '../_util'
import { arity, wrap } from './common'
/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `roles` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the role set's scope.
 * @return {Expr}
 */

export default function Roles(scope) {
  arity.max(1, arguments, Roles.name)
  scope = defaults(scope, null)
  return new Expr({
    roles: wrap(scope),
  })
}
