import Client, { QueryOptions } from './Client'
import Expr from './Expr'
import type { LambdaType as Lambda } from './query'

/** @public */
export default class PageHelper {
  constructor(
    client: Client,
    set: Expr,
    params?: object,
    options?: QueryOptions
  )

  map(lambda: Lambda): PageHelper
  filter(lambda: Lambda): PageHelper

  each(lambda: (page: object) => void): Promise<void>
  eachReverse(lambda: (page: object) => void): Promise<void>

  previousPage(): Promise<object>
  nextPage(): Promise<object>
}
