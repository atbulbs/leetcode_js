/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  function helper (arr, ignoreIndex) {
    let maxLen = 0
    let pointer = 0
    let count = 0
    while (pointer < arr.length) {
      if (pointer !== ignoreIndex) {
        if (arr[pointer] === 1) {
          ++count
          maxLen = Math.max(count, maxLen)
        } else {
          count = 0
        }
      }
      ++pointer
    }
    return maxLen
  }
  let res = 0
  let hasZero = false
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      res = Math.max(res, helper(nums, i))
      hasZero = true
    }
  }
  return hasZero ? res : nums.length - 1
};

console.warn(longestSubarray([1,1,0,1]))