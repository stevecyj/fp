function multiply(x, y) {
  return x * y
}

function curry(func) {
  return function (x) {
    return function (y) {
      return func(x, y)
    }
  }
}

const multiplyByThree = curry(multiply)(3)

console.log(multiplyByThree(4)) // 12