/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  const hashTable = {}
  for(let i = astr.length - 1; i >= 0; --i) {
    if (hashTable[astr[i]] === undefined) {
      hashTable[astr[i]] = 1
    } else {
      return false
    }
  }
  return true
};