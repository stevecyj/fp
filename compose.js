import * as R from "ramda"

let str = "hello"

function add1(str) {
  return str + 1
}

function add2(str) {
  return str + 2
}

function add3(str) {
  return str + 3
}

function multiply3(x) {
  return x * 3
}

function subtract5(x) {
  return x - 5
}

// pipe
export let add = R.pipe(add1, add2, add3)
console.log(add(str)) // hello123

// 手写pipe
export const handlePipe = function (...fns) {
  return function (x) {
    return fns.reduce((v, f) => f(v), x)
  }
}

export const pipeLine = handlePipe(add2, multiply3, subtract5)
console.log(pipeLine(10)) // 31
