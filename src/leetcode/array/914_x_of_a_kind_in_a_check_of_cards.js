/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) {
    return false
  }
  const hashTable = {}
  deck.forEach(item => {
    if (hashTable[item] === undefined) {
      hashTable[item] = 1
    } else {
      ++hashTable[item]
    }
  })
  const keyArr = Object.keys(hashTable)
  if (keyArr.length === 1) {
    if (keyArr[0] === 1) {
      return false
    } else {
      return true
    }
  }
  if (hashTable[keyArr[0]] === 1 || hashTable[keyArr[1]] === 1) {
    return false
  }
  function getMCD (a, b) {
    for (let i = 2; i <= a && i <= b; ++i) {
      if (a % i === 0 && b % i === 0) {
        return i
      }
    }
    return -1
  }
  let mcd = getMCD(hashTable[keyArr[0]], hashTable[keyArr[1]])
  if (mcd === -1) {
    return false
  }
  for (let i = 1; i < keyArr.length - 1; ++i) {
    if (hashTable[keyArr[i]] === 1) {
      return false
    }
    const _mcd = getMCD(hashTable[keyArr[i]], hashTable[keyArr[i + 1]])
    if (_mcd === -1) {
      return false
    }
    if (_mcd < mcd) {
      mcd = _mcd
    }
  }
  return true
};

console.warn(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
console.warn(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
console.warn(hasGroupsSizeX([1]))
console.warn(hasGroupsSizeX([1, 1]))
console.warn(hasGroupsSizeX([1,1,2,2,2,2]))