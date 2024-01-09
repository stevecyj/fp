const myArray = [22, 9, 60, 12, 4, 56]
const sum = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`)
  return x + y
}
const result = myArray.reduce(sum, 0)
const average = (arr) => arr.reduce(sum, 0) / arr.length

console.log(result) // 163
console.log(average(myArray)) // 27.166666666666668

const sumOrDivide = (sum, val, idx, arr) => {
  sum += val
  return idx == arr.length - 1 ? sum / arr.length : sum
}
const average2 = (arr) => arr.reduce(sumOrDivide, 0)
console.log(average2(myArray)) // 27.166666666666668

const average3 = (arr) => {
  const sc = arr.reduce(
    (ac, val) => {
      return {
        sum: ac.sum + val,
        count: ac.count + 1,
      }
    },
    {
      sum: 0,
      count: 0,
    }
  )
  return sc.sum / sc.count
}
console.log(average3(myArray)) // 27.166666666666668
