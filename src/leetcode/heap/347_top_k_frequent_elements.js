/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hashTable = {}
  nums.forEach(item => {
    if (hashTable[item] === undefined) {
      hashTable[item] = 1
    } else {
      hashTable[item]++
    }
  })
  hashTableArray = Object.keys(hashTable)
  hashTableArray.sort((prev, next) => {
    return hashTable[next] - hashTable[prev]
  })
  return hashTableArray.slice(0, k)
};