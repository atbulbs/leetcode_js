/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') {
    return []
  }
  const digitsMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }
  // 0到第n个号码的字母组合 为 第0个号码的字母组合 拼接 1到第n个号码的字母组合
  // F(digits[0~n]) = H(digits[0]) + F(digits[1~n])
  let len = digits.length - 1
  let res = digitsMap[digits[len]]
  while (len > 0) {
    const digit = digits[--len]
    const prevDigits = digitsMap[digit]
    let newRes = []
    for (let i = 0; i < prevDigits.length; ++i) {
      for (let j = 0; j < res.length; ++j) {
        newRes.push(prevDigits[i] + res[j])
      }
    }
    res = newRes
  }
  return res
};

console.warn(letterCombinations('23'))