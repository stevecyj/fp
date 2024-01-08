// Either 函子內部有2個值，left 值和 right 值
// left 值只會在 right 值不存在的情況下起作用
class Either {
  constructor(left, right) {
    this.left = left
    this.right = right
  }
  // 類似靜態工廠方法的 of 方法，用來返回想要的實例
  static of(left, right) {
    return new Either(left, right)
  }
  // 如果容器裡有 map 方法，可以接收一個函式，返回值還是一個同類型的物件，稱為函子
  // 函子提供 map 方法，接入各種運算邏輯，進而改變值
  map(fn) {
    return this.right
      ? Either.of(this.left, fn(this.right))
      : Either.of(fn(this.left), this.right)
  }
  get value() {
    return this.right || this.left
  }
}

let response = { name: "JOJO", gender: null }
let either = Either.of("男", response.gender).map((x) => `性別:${x}`)
console.log(either.value)

function parseJson(str) {
  try {
    return Either.of(null, JSON.parse(str))
  } catch (error) {
    return Either.of({ error: error.message }, null)
  }
}
console.log(parseJson(`{"age":18}`).value)
console.log(parseJson(`{age:18}`).value)
