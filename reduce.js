const arr = [1, 2, 3]
// const initValue = 0
// const add = (previousValue, currentValue) => previousValue + currentValue
const initValue = []
const addAndPush = (previousValue, currentValue) => {
  previousValue.push(currentValue)
  return previousValue
}
const result = arr.reduce(addAndPush, initValue)

console.log(result) // 6
