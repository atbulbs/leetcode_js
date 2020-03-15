/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  const hashTable = {}
  const half = Math.floor(nums.length / 2)
  for (let i = 0; i < nums.length; ++i) {
    const item = nums[i]
    if (hashTable[item] === half) {
      return item
    }
    if (hashTable[item] === undefined) {
      hashTable[item] = 1
    } else {
      ++hashTable[item]
    }
  }
};