/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  if (s.length <= 1) {
    return ''
  } else {
    let len = s.length - 1
    while (len > 0) {
      if (s.substr(0, len) === s.substr(s.length - len, len)) {
        return s.substr(0, len)
      }
      --len
    }
    return ''
  }
};

var s = "level"
// var s = "ababab"
// var s = "leetcodeleet"
console.warn(longestPrefix(s))
