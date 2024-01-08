import * as R from "ramda"

let { join, map, toUpper, split, compose } = R
let str = "click button"

let r1 = split(" ", str)
console.log(r1)

let r2 = map(toUpper, r1)
console.log(r2)

let r3 = join("_", r2)
console.log(r3)

// compose is right to left
export let transform = compose(join("_"), map(toUpper), split(" "))
console.log(transform(str))
