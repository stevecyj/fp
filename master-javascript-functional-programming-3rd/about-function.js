// const second = function third() {}
// console.log(second.name)
function useArguments2(...args) {
  somethingElse(...args)
}

function somethingElse(...args) {
  let arr = [...args]
  console.log("arr", arr)
}

useArguments2(1, 2, 3, 4, 5)
