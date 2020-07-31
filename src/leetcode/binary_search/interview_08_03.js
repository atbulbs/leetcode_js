/**
 * @param {number[]} nums
 * @return {number}
 */
https://static.leetcode-cn.com/cn-mono-assets/production/main/assets/2020-7.48395eba.gif

var findMagicIndex = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const middle = Math.floor((right - left) / 2)
    if (nums[middle] > middle) {
      right = middle
    } else if (nums[middle] < middle) {
      left = middle
    } else {
      return middle
    }
  }
  return -1
};

console.warn(findMagicIndex([0, 2, 3, 4, 5, 6]))