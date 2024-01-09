// const R = require("ramda")
import * as R from "ramda"
function add(a, b, c) {
  return a + b + c
}

/**
 * curry
 */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

export let curryAdd = curry(add)
console.log(curryAdd(1, 2, 3))
console.log(curryAdd(1)(2, 3))
console.log(curryAdd(1)(2)(3))
