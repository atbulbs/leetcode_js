/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  function isOdd (num) {
    return (num & 1) === 1
  }
  let res = 0
  for (let l = 0; l < nums.length; ++l) {
    // 包含第l个数
    let flag = true
    for (let m = l; m < nums.length && flag; ++m) {
      let count = 0
      for (let n = l; n <= m; ++n) {
        if (isOdd(nums[n])) {
          ++count
          if (count > k) {
            flag = false
          }
        }
      }
      // console.warn('count', count)
      if (count === k) {
        ++res
      }
    }
  }
  return res
};

console.warn(numberOfSubarrays([1,1,2,1,1], 3) === 2)
console.warn(numberOfSubarrays([2,4,6], 1) === 0)
console.warn(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2) === 16)
console.warn(numberOfSubarrays([1,1,1,1,1], 1) === 5)