/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
  // 如果总金额为sum, 且最后找零一枚硬币面值为val, 那么该找零有多少种方法
  function helper (sum, val) {
    if (sum < val) {
      return 0
    } else {
      return helper(sum - 25, 25) + helper(sum - 10, 10) + helper(sum - 5, 5) + helper(sum - 1, 1)
    }
  }
  return helper(n - 25, 25) + helper(n - 10, 10) + helper(n - 5, 5) + helper(n - 1, 1)
};

console.warn(waysToChange(5))
console.warn(waysToChange(10))