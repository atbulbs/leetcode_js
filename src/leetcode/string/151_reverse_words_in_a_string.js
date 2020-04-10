/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let res = ''
  let start = s.length - 1
  let hasFindStart = false
  let end = start
  let hasFindEnd = false
  for (let i = start; i >= 0; --i) {
    if (hasFindEnd === false && s[i] !== ' ') {
      hasFindEnd = true
      end = i
    }
    if (hasFindEnd === true && (s[i] === ' ' || i === 0)) {
      hasFindStart = true
      start = i
    }
    if (hasFindEnd && hasFindStart) {
      let str = ''
      for (let i = start; i <= end; ++i) {
        if (s[i] !== ' ') {
          str += s[i]
        }
      }
      // console.warn('str', str)
      if (res.length === 0) {
        res += str
      } else {
        res += ' ' + str
      }
      hasFindStart = false
      hasFindEnd = false
    }
  }
  return res
};

console.warn(reverseWords('the sky is blue'))
console.warn(reverseWords('  hello world!  '))
console.warn(reverseWords('a good   example'))