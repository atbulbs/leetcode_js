/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let res = 0
  function getSubStrings (s) {
    for (let i = 0; i < s.length - 1; i++) {
      let _s = s[i]
      let _s0 = _s
      let hasFindFirstOpposite = false
      let leftCount = 1
      let rightCount = 0
      for (let j = i + 1; j <= s.length - 1; j++) {
        if (_s0 === s[j] && hasFindFirstOpposite) {
          break
        }
        if (_s0 !== s[j]) {
          hasFindFirstOpposite = true
          ++rightCount
        } else {
          ++leftCount
        }
        _s += s[j]
        // console.warn('_s', _s)
        if (leftCount == rightCount) {
          ++res
          break
        }
      }
    }
  }
  function isBinaryString (s) {
    if ((s.length & 1) === 1) {
      return false
    } else if (s[0] === s[s.length - 1]) {
      return false
    } else {
      let left = 0
      let right = s.length - 1
      while (left < right) {
        if ((s[left] !== s[0]) || (s[right] !== s[s.length - 1])) {
          return false
        }
        ++left
        --right
      }
      return true
    }
  }
  getSubStrings(s)
  return res
};

console.warn('countBinarySubstrings', countBinarySubstrings('00110011'))

var countBinarySubstrings = function(s) {
  let ptr = 0, n = s.length, last = 0, ans = 0;
  while (ptr < n) {
      const c = s.charAt(ptr);
      let count = 0;
      while (ptr < n && s.charAt(ptr) === c) {
          ++ptr;
          ++count;
      }
      ans += Math.min(count, last);
      last = count;
  }
  return ans;
};

