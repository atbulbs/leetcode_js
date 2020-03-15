/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const array = [1, 2, 3]
  if (n < 3) {
    return array[n - 1]
  } else {
    for (let i = 3; i < n; i++) {
      array[i] = array[i - 1] + array[i - 2]
    }
    return array[n - 1]
  }
};
