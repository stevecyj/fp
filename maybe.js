// 容器內部的值可能是空值，而外部函數未必有處理空值的機制，如果傳入空值，可能會出錯
// Maybe 函子可能過濾空值，能過濾空值的函子，稱為 Maybe 函子
class Maybe {
  constructor(x) {
    this.value = x
  }
  // 類似靜態工廠方法的 of 方法，用來返回想要的實例
  static of(x) {
    return new Maybe(x)
  }
  // 如果容器裡有 map 方法，可以接收一個函式，返回值還是一個同類型的物件，稱為函子
  // 函子提供 map 方法，接入各種運算邏輯，進而改變值
  map(fn) {
    return this.value ? new Maybe(fn(this.value)) : this
  }
}

let r = Maybe.of(null).map((x) => x.toUpperCase())
console.log(r)
