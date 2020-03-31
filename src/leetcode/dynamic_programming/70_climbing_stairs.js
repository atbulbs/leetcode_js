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

var climbStairs = function(n) {
  if (n < 1) {
    return 0
  } if (n === 1) {
    return 1
  } if (n === 2) {
    return 2
  } else {
    let cur = 2
    let pre = 1
    for (let i = 3; i <= n; ++i) {
      const temp = cur
      cur = pre + cur
      pre = temp
    }
    return cur
  }
};

var climbStairs = function(n) {
  if (n < 1) {
    return 0
  } if (n === 1) {
    return 1
  } if (n === 2) {
    return 2
  } else {
    let cur = 2
    let pre = 1
    for (let i = 3; i <= n; ++i) {
      [pre, cur] = [cur, pre + cur]
    }
    return cur
  }
};
