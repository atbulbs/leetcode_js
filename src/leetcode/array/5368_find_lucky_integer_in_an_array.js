/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const hashTable = {}
  arr.forEach(item => {
    if (hashTable[item] === undefined) {
      hashTable[item] = 1
    } else {
      ++hashTable[item]
    }
  })
  let maxCount = 0
  let res = -1
  for (let key in hashTable) {
    if (hashTable[key] * 1 === key * 1) {
      if (hashTable[key] > maxCount) {
        maxCount = hashTable[key]
        res = key * 1
      }
    }
  }
  return res
};

console.warn(findLucky([2,2,3,4]))
console.warn(findLucky([1,2,2,3,3,3]))
console.warn(findLucky([2,2,2,3,3]))
console.warn(findLucky([5]))
console.warn(findLucky([7,7,7,7,7,7,7]))