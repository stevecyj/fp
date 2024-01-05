function addThreeNum(a, b, c) {
  return a + b + c
}

function curry(addThreeNum) {
  return function (a) {
    return function (b) {
      return function (c) {
        return addThreeNum(a, b, c)
      }
    }
  }
}

const curryAddThreeNum = curry(addThreeNum)

console.log(addThreeNum(1, 2, 3)) // 6
console.log(curryAddThreeNum(1)(2)(3)) // 6
