/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  } else if (x >= 0 && x < 10) {
      return true
  }  else {
      let reverse = ''
      let cur = x
      while (cur / 10 > 0) {
          reverse += cur % 10
          cur = Math.floor(cur / 10)
      }
      // console.warn('reverse', reverse)
      return reverse * 1 === x
  }
};

var isPalindrome = function(x) {
  if (x < 0) {
    return false
  } else if (x >= 0 && x < 10) {
      return true
  }  else {
      let reverse = 0
      let cur = x
      while (cur / 10 > 0) {
          reverse = reverse * 10 + cur % 10
          cur = Math.floor(cur / 10)
      }
      return reverse === x
  }
};


var isPalindrome = function(x) {
  // 负数
  if (x < 0) {
    return false
  // 0至9
  } else if (x >= 0 && x < 10) {
      return true
  // 末尾数为0的非零数字
  } else if (x !== 0 && x % 10 === 0) {
    return false
  } else {
      let reverse = 0
      // 如果翻转数字大于原数字, 则翻转到了中间数位
      while (x > reverse) {
          reverse = reverse * 10 + x % 10
          x = Math.floor(x / 10)
      }
      // 考虑奇数位
      return (reverse === x) || (Math.floor(reverse / 10) === x)
  }
};

console.warn(isPalindrome(121))