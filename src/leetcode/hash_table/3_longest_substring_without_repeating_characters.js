/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) {
    return 1
  } else {
    let res = 0
    let left = 0
    const hashTable = {}
    for (let right = 0; right < s.length; right++) {
      console.warn('s[right]', s[right])
      if (!hashTable[s[right]]) {
        hashTable[s[right]] = right + 1
        res = Math.max(res, right - left + 1)
        console.warn('_res' ,res)
      } else {
        left = hashTable[s[right]]
        for (let j = 0; j < left - 1; j++) {
          delete hashTable[s[j]]
        }
      }
    }
    console.warn('res', res)
    return res
  }
}




var lengthOfLongestSubstring = function (s) {
  const hashTable = {}
  let res = 0
  let left = 0
  for (let right = 0; right < s.length; right++) {
    console.warn('s[right]', s[right])
    if (hashTable[s[right]]) {
      left = hashTable[s[right]]
      for (let i = 0; i < left - 1; i++) {
        delete hashTable[s[i]]
      }
    } else {
      hashTable[s[right]] = right + 1
    }
    console.warn('res', res)
    res = Math.max(res, right - left + 1)
  }
  return res
}

console.warn('3', console.warn(lengthOfLongestSubstring('abcabcbb')))
console.warn('5', console.warn(lengthOfLongestSubstring("tmmzuxt")))