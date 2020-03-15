/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  function isDividingNumber (n) {
    if (n < 10) {
      return true
    } else {
      let cur = n
      while (cur !== 0) {
        const bit = cur % 10
        if (bit === 0 || n % bit !== 0) {
          return false
        }
        cur = Math.floor(cur / 10)
      }
      return true
    }
  }
  const res = []
  for (let i = left; i <= right; i++) {
    if (isDividingNumber(i)) {
      res.push(i)
    }
  }
  return res
};