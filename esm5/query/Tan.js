import Expr from '../Expr'
import { arity, wrap } from './common'
/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The Tangent of a number
 * @return {Expr}
 */

export default function Tan(expr) {
  arity.exact(1, arguments, Tan.name)
  return new Expr({
    tan: wrap(expr),
  })
}
