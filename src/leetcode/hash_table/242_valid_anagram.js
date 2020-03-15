/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  } else {
    const hashTableS = {}
    const hashTableT = {}
    for (let i = s.length - 1; i >= 0; i--) {
      if (!hashTableS[s[i]]) {
        hashTableS[s[i]] = 1
      } else {
        hashTableS[s[i]]++
      }
      if (!hashTableT[t[i]]) {
        hashTableT[t[i]] = 1
      } else {
        hashTableT[t[i]]++
      }
    }
    if (hashTableS.length !== hashTableT.length) {
      return false
    } else {
      for (let str in hashTableS) {
        if (hashTableS[str] !== hashTableT[str]) {
          return false
        }
      }
      return true
    }
  }
};