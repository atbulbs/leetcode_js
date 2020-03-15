/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMapS = {}
  const hashMapT = {}
  for (let i = s.length - 1; i >= 0; i--) {
    if (!hashMapS[s[i]]) {
      hashMapS[s[i]] = t[i]
    } else {
      if (hashMapS[s[i]] !== t[i]) {
        return false
      }
    }
    if (!hashMapT[t[i]]) {
      hashMapT[t[i]] = s[i]
    } else {
      if (hashMapT[t[i]] !== s[i]) {
        return false
      }
    }
  }
  console.warn('hashMapS', hashMapS)
  console.warn('hashMapT', hashMapT)
  return true
};

isIsomorphic('ab', 'aa')