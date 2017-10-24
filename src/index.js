import { isConstructor } from './utils'

class Observable {
  /**
   * support the `from` method at the constructor
   * https://tc39.github.io/proposal-observable/#observable-from
   *
   * Let C be the this value.
   * If IsConstructor(C) is false, let C be %Observable%.
   * Let subscriber be a new built-in function object as defined in Observable.of Subscriber Functions.
   * Set subscriber's [[Items]] internal slot to items.
   * Return Construct(C, « ‍subscriber »).
   */
  static from() {
    const C = isConstructor(this) ? this : Observable
  }

  /**
   * support the `of` method at the constructor
   * https://tc39.github.io/proposal-observable/#observable-of
   */
  static of() {

  }

  constructor() {

  }

  /**
   * support the `subscribe` method at the instance
   * https://tc39.github.io/proposal-observable/#observable-prototype-subscribe
   */
  subscribe() {

  }

  /**
   * support the `@@observable` method at the instance
   * https://tc39.github.io/proposal-observable/#observable-prototype-subscribe
   */
  [Symbol.observable]() {
    return this
  }
}

export default Observable
