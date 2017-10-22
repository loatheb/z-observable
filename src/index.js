class Observable {
  /**
   * support the `from` method at the constructor
   * https://tc39.github.io/proposal-observable/#observable-from
   */
  static from() {

  }

  /**
   * support the `of` method at the constructor
   * https://tc39.github.io/proposal-observable/#observable-of
   */
  static of() {

  }

  constructor() {
    super()
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
