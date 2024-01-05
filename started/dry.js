// const map = (arr, cb) => {
//   const len = arr.length
//   const newArr = []
//   for (let i = 0; i < len; i++) {
//     newArr.push(cb(arr[i]))
//   }
//   return newArr
// }

// const mapResult = map([1, 2, 3], (item) => item * 2)
// console.log(mapResult)

function add1(num) {
  return num + 1
}

function mult3(num) {
  return num * 3
}

function divide2(num) {
  return num / 2
}

const arr = [1, 2, 3]

function arrCompute(arr, compute) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(compute(arr[i]))
  }
  return newArr
}

console.log(arrCompute(arr, add1))
console.log(arrCompute(arr, mult3))
console.log(arrCompute(arr, divide2))
