/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let numStr = ''
  let charStr = ''
  for (let i = 0; i < s.length; ++i) {
    if (isNaN(s[i])) {
      charStr += s[i]
    } else {
      numStr += s[i]
    }
  }
  console.warn('numStr', numStr)
  console.warn('charStr', charStr)
  // 先放数字, 如果还有数字但是没有字母了就无法格式化
  if (numStr.length > 0) {
    let numStrLen = numStr.length
    let charStrLen = charStr.length
    while (--numStrLen > 0) {
      if (charStrLen <= 0) {
        break
      } else {
        --charStrLen
      }
    }
    // console.warn('-- charStrLen', charStrLen)
    if ((charStrLen === 1 && numStr.length === charStr.length) || (charStrLen === 0 && Math.abs(numStr.length -  charStr.length) === 1)) {
      let res = ''
      for (let i = 0; i < numStr.length; ++i) {
        res += numStr[i]
        if (charStr[i]) {
          res += charStr[i]
        }
      }
      return res
    }
  }
  // 先放字母, 如果还有字母但是没有数字了就无法格式化
  if (charStr.length > 0) {
    let numStrLen = numStr.length
    let charStrLen = charStr.length
    while (--charStrLen > 0) {
      if (numStrLen <= 0) {
        break
      } else {
        --numStrLen
      }
    }
    // console.warn('-- numStrLen', numStrLen)
    if ((numStrLen === 1 && numStr.length === charStr.length) || (numStrLen === 0 && Math.abs(numStr.length -  charStr.length) === 1)) {
      let res = ''
      for (let i = 0; i < charStr.length; ++i) {
        res += charStr[i]
        if (numStr[i]) {
          res += numStr[i]
        }
      }
      return res
    }
  }
  return ''
};

console.warn(reformat('a0b1c2'))
console.warn(reformat('leetcode'))
console.warn(reformat('1229857369'))
console.warn(reformat('covid2019'))
console.warn(reformat('ab123'))