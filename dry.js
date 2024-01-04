const map = (arr, cb) => {
  const len = arr.length
  const newArr = []
  for (let i = 0; i < len; i++) {
    newArr.push(cb(arr[i]))
  }
  return newArr
}

const mapResult = map([1, 2, 3], (item) => item * 2)
console.log(mapResult)
