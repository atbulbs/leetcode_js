/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  function helper (str1, str2) {
    if (str2 === '') {
      return ''
    }
    if (str1.length === str2.length) {
      if (str2 === str1) {
        return str2
      } else {
        return ''
      }
    }
    const count = Math.floor(str1.length / str2.length)
    let i
    for (i = 0; i < count; ++i) {
      const curStr = str1.substr(i * str2.length, str2.length)
      if (curStr !== str2) {
        return ''
      }
    }
    if (str1.length % str2.length === 0) {
      return str2
    } else {
      const _str = str1.substring(i * str2.length)
      return helper(str2, _str)
    }
  }
  if (str1.length > str2.length) {
    return helper(str1, str2)
  } else {
    return helper(str2, str1)
  }
};

var str1 = "ABCABC"
var str2 = "ABC"

console.warn('gcdOfStrings', gcdOfStrings(str1, str2))