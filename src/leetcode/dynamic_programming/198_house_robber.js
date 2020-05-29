/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let res = 0
  const len = nums.length
  // 定义状态dp[i]: 最后的房屋索引为i时的最高金额
  // 状态转移方程 dp[i] = Max(dp[i - 2], dp[i - 3]) + val[i]
  const dp = []
  if (len === 0) {
    return 0
  }
  dp[0] = nums[0]
  if (len === 1) {
    return dp[0]
  }
  dp[1] = Math.max(nums[0], nums[1])
  if (len === 2) {
    return Math.max(...dp)
  }
  dp[2] = Math.max(nums[0] + nums[2], nums[1])
  if (len === 3) {
    return Math.max(...dp)
  }
  dp[3] = Math.max(dp[1], dp[0]) + nums[3]
  if (len === 4) {
    return Math.max(...dp)
  }
  for (let i = 4; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i]
  }
  return Math.max(...dp)
};