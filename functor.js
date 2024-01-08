/**
 * container
 * 如果物件內部能保有值，並且能夠對外提供一個函式，讓外部能夠對內部的值進行操作，那麼這個物件就是一個容器
 */
class Container {
  constructor(x) {
    this.value = x
  }
}

let container = new Container(2)
console.log(container.value)

/**
 * pointed container
 * 如果容器裡有 of 方法，稱為有指向的容器
 */
class PointedContainer {
  constructor(x) {
    this.value = x
  }
  // 類似靜態工廠方法的 of 方法，用來返回想要的實例
  static of(x) {
    return new PointedContainer(x)
  }
}
let pointedContainer = PointedContainer.of(3)
console.log(pointedContainer.value)

/**
 * 函子像函數
 * 函數是映射關係，把參數映射成返回值
 * map 也是映射的意思，把舊的實例映射成新的實例
 * 也可以把一個舊值映射成一個新值
 */
class Functor {
  constructor(x) {
    this.value = x
  }
  // 類似靜態工廠方法的 of 方法，用來返回想要的實例
  static of(x) {
    return new Functor(x)
  }
  // 如果容器裡有 map 方法，可以接收一個函式，返回值還是一個同類型的物件，稱為函子
  // 函子提供 map 方法，接入各種運算邏輯，進而改變值
  map(fn) {
    return new Functor(fn(this.value))
  }
}

let functor = Functor.of(1)
  .map((x) => x + 1)
  .map((x) => x + 2)
  .map((x) => x + 3)
console.log(functor)
