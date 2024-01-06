function add(a, b, c) {
  return a + b + c
}

function curry(func) {
  let curried = (...args) => {
    if (args.length < func.length) {
      return (...rest) => {
        return curried(...args.concat(rest))
      }
    }
    return func(...args)
  }
  return curried
}

export let curryAdd = curry(add)
