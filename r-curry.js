const R = require("ramda")
function add(a, b, c) {
  return a + b + c
}

let curryAdd = R.curry(add)
console.log(curryAdd(1, 2, 3))
console.log(curryAdd(1)(2, 3))
console.log(curryAdd(1)(2)(3))
