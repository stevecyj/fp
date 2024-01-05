// 推導過程
// func1(0)=callback(0,func1)
// func2(value1)=callback(value1,func2)
// func3(value2)=callback(value2,func3)
// func(input)=callback(input,func)

// const funcs = [func1, func2, func3]

function add4(num) {
  return num + 4
}

function multiply3(num) {
  return num * 3
}

function divide2(num) {
  return num / 2
}

// pipe function
function pipe(...funcs) {
  function callback(value, func) {
    return func(value)
  }

  return function (param) {
    return funcs.reduce(callback, param)
  }
}

// 倒序
function compose(...funcs) {
  function callback(value, func) {
    return func(value)
  }

  return function (param) {
    return funcs.reduceRight(callback, param)
  }
}

const compute = pipe(add4, multiply3, divide2)
const computeReverse = compose(add4, multiply3, divide2)

console.log(compute(2))
console.log(computeReverse(2))
