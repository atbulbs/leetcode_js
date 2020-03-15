/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const hashTable = {}
  const res = []
  arr1.forEach(item => {
    if (hashTable[item] === undefined) {
      hashTable[item] = 1
    } else {
      ++hashTable[item]
    }
  })
  arr2.forEach(item => {
    for (let i = hashTable[item]; i > 0; i--) {
      res.push(item)
    }
    delete hashTable[item]
  })
  const arr3 = Object.keys(hashTable)
  arr3.sort((a, b) => a - b)
  arr3.forEach(item => {
    for (let i = hashTable[item]; i > 0; i--) {
      res.push(item)
    }
  })
  return res
};