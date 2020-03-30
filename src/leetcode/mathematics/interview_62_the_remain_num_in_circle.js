/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let arr = []
  for (let i = 0; i < n; ++i) {
    arr.push(i)
  }
  let index = -1
  while (arr.length > 1) {
    for (let j = 0; j < m; ++j) {
      ++index
      if (index === arr.length) {
        index = 0
      }
    }
    arr.splice(index, 1)
    --index
  }
  return arr[0]
};

var lastRemaining = function(n, m) {
  function Node (val, next) {
    this.val = val
    this.next = next
  }
  
};

console.warn(lastRemaining(5, 3))
console.warn(lastRemaining(10, 17))
