/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length <= 1) {
    return nums.length
  } else {
    let res = 1
    for (let i = 0; i < nums.length - 1; ++i) {
      let _res = 1
      let min = nums[i]
      for (let j = i + 1; j < nums.length - 1; ++j) {
        for (let k = j + 1; k < nums.length; ++k) {

        }
        if (nums[j] > min) {
          _res++
          min = nums[j]
        }
      }
      if (_res > res) {
        res = _res
      }
    }
    return res
  }
};

// dp
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (len == 0) return 0
  if (len == 1) return 1
  let dp = new Array(len).fill(1)
  for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
          dp[i] = Math.max(dp[i], nums[i] > nums[j] ? dp[j] + 1 : 1)
      }
  }
  dp.sort((a, b) => b - a)
  return dp[0]
};
