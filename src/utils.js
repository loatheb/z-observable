/**
 * https://tc39.github.io/ecma262/#sec-isconstructor
 *
 * The abstract operation IsConstructor determines if argument, which must be an ECMAScript language value, is a function object with a [[Construct]] internal method.
 */
export function isConstructor(argument) {
  /**
   * If Type(argument) is not Object, return false.
   * https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
   *
   * basic types we have in JS: Undefined, Null, Boolean, String, Symbol, Number, Object.
   */
  if (typeof argument !== 'object' && argument !== null) {
    return false
  }

  /**
   * If argument has a [[Construct]] internal method, return true.
   * Checking both at instance and prototype
   */
  if ('constructor' in argument) {
    return true
  }

  /**
   * Finally return false.
   */
  return false
}
