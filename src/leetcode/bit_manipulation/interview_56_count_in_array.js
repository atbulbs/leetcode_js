/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let all = 0
  let res1 = 0
  let res2 = 0
  nums.forEach(item => {
    all ^= item
  })
  let first1 = 1
  while ((all & first1) === 0) {
    first1 << 1
  }
  nums.forEach(item => {
    if ((first1 & item) === 0) {
      res1 ^= item
    } else {
      res2 ^= item
    }
  })
  return [res1, res2]
};