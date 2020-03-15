// 输入: 19
// 输出: true
// 解释:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const memory = {}
  while (n !== 1) {
    function getBitSquareSum (n) {
      let sum = 0
      while (n !== 0) {
        const bit = n % 10
        sum += bit * bit
        n = parseInt(n / 10)
      }
      return sum
    }
    n = getBitSquareSum(n)
    if (memory[n] === undefined) {
      memory[n] = 1
    } else {
      break
    }
  }
  return n === 1
};

var isHappy = function (n) {
  let slowPointer = n
  let fastPointer = n
  function getBitSquareSum (n) {
    let sum = 0
    while (n !== 0) {
      const bit = n % 10
      sum += bit * bit
      n = parseInt(n / 10)
    }
    return sum
  }
  do {
    slowPointer = getBitSquareSum(slowPointer)
    fastPointer = getBitSquareSum(getBitSquareSum(fastPointer))
  } while (slowPointer !== fastPointer)
  return slowPointer === 1
}