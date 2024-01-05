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

let filterQs = R.filter(R.test(/q/i))
console.log(filterQs(["hello", "world", "queen", "jojo"]))
