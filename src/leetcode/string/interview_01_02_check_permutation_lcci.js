/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  } else {
    const hashTable1 = {}
    const hashTable2 = {}
    for (let i = s1.length - 1; i >= 0; --i) {
      if (hashTable1[s1[i]] === undefined) {
        hashTable1[s1[i]] = 1
      } else {
        hashTable1[s1[i]]++
      }
    }
    for (let j = s2.length - 1; j >= 0; --j) {
      if (hashTable2[s2[j]] === undefined) {
        hashTable2[s2[j]] = 1
      } else {
        hashTable2[s2[j]]++
      }
    }
    for (let key in hashTable1) {
      if (hashTable2[key] === undefined) {
        return false
      } else if (hashTable2[key] !== hashTable1[key]) {
        return false
      }
    }
    return true
  }
};