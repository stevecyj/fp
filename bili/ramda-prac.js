const R = require("ramda")

// 练习 1
//==============
// 通过局部调用（partial apply）移除所有参数

// var words = function (str) {
//   return split(" ", str)
// }

// 练习 1a
//==============
// 使用 `map` 创建一个新的 `words` 函数，使之能够操作字符串数组

// var sentences = undefined

let words = R.split(" ")
console.log(words("hello JOJO"))

let sentences = R.map(words)

// 练习 2
//==============
// 通过局部调用（partial apply）移除所有参数

// var filterQs = function (xs) {
//   return filter(function (x) {
//     return match(/q/i, x)
//   }, xs)
// }

let filterQs = R.filter(R.match(/q/i))
console.log(filterQs(["hello", "world", "queen", "jojo"]))

// 彩蛋 1:
// ============
// 包裹数组的 `slice` 函数使之成为 curry 函数
// //[1,2,3].slice(0, 2)
// var slice = undefined

let slice = R.curry((start, end, xs) => xs.slice(start, end))
console.log(slice(0)(2)([1, 2, 3]))
