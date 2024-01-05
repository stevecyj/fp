function multiply(x, y) {
  return x * y
}

function wrapFunc(func, fixedValue) {
  function wrappedFunc(input) {
    return func(input, fixedValue)
  }
  return wrappedFunc
}

const multiplyByThree = wrapFunc(multiply, 3)
console.log(multiplyByThree(2))