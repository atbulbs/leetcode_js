/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
  let count = 0
  let prevMaxNum = 0
  const maxNum = Math.max(...arr)
  console.warn('maxNum', maxNum)
  let pointer = 2
  let _arr = [arr[0], arr[1]]
  while (true) {
    let max
    if (_arr[0] < _arr[1]) {
      max = _arr[1]
      min = _arr[0]
    } else {
      max = _arr[0]
      min = _arr[1]
    }
    if (max === maxNum) {
      return maxNum
    }
    if (prevMaxNum === max) {
      ++count
      if (count === k) {
        return max
      }
    } else {
      prevMaxNum = max
      count = 1
      if (count === k) {
        return max
      }
    }
    _arr = [max, arr[pointer++]]
  }
};

console.warn(getWinner([2,1,3,5,4,6,7], 2))