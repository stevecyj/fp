import * as R from "ramda"

function add(a, b) {
  console.log("do add")
  return a + b
}

const resolver = (...args) => JSON.stringify(args)
export const memorizeAdd = R.memoizeWith(R.identity, add)
console.log(memorizeAdd(1, 2))
console.log(memorizeAdd(1, 2))
console.log(memorizeAdd(1, 2))
