function chain() {
  return function (param) {
    return param + 1
  }
}

const compute = chain()

console.log(compute(2))
