var lambda = function (x) {
  return x + 2
}
var result = lambda(
  (function (x) {
    return x * x
  })(3)
)

console.log("result", result)
