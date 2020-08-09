/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  const memo = {
    1: '0',
    // 2: '011'
  }
  function helper (n) {
    // console.warn('n', n)
    if (memo[n] !== undefined) {
      return memo[n]
    } else {
      const pre = helper(n - 1)
      memo[n] = pre  + '1' + reverse(invert(pre))
      return memo[n]
    }
  }
  function reverse (s) {
    // console.warn('reverse s', s)
    let res = ''
    for (let i = s.length - 1; i >= 0; --i) {
      res += s[i]
    }
    return res
  }
  function invert (s) {
    // console.warn('invert s', s)
    let res = ''
    for (let i = 0; i <= s.length - 1; ++i) {
      res += (s[i] === '0') ? '1' : '0'
    }
    // console.warn('invert res', res)
    return res
  }
  const s = helper(n)
  // console.warn('memo', memo)
  // console.warn('s', s)
  return s[k - 1]
};

// console.log(findKthBit(3, 1))
console.log(findKthBit(4, 11))