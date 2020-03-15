// Input: ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  } else if (strs.length === 1) {
    return strs[0]
  } else {
    let res = strs[0]
    function helper (str1, str2) {
      console.warn('str1', str1)
      console.warn('str2', str2)
      const shortStr = str1.length > str2.length ? str2 : str1
      const longStr = str1.length > str2.length ? str1 : str2
      for (let i = shortStr.length; i > 0; i--) {
        const subStr = shortStr.substring(0, i)
        if (longStr.startsWith(subStr)) {
          return subStr
        }
      }
      return ''
    }
    for (let i = 1; i < strs.length; i++) {
      res = helper(res, strs[i])
      console.warn('res', res)
      if (res === '') {
        break
      }
    }
    return res
  }
};

const test = ["flower","flow","flight"]
longestCommonPrefix(test)