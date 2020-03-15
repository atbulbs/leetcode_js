// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.

// Example 1:

// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 

// Example 2:

// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
 

// Note:

// nums will have a length in the range [1, 50].
// Every nums[i] will be an integer in the range [0, 99].

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // 考虑数组长度为1
    if (nums.length === 1) {	
      return 0
    }
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
      hash[i] = nums[i]
    }
    let arr = Object.keys(hash).sort((a, b) => hash[b] - hash[a])
    if (hash[arr[0]] >= hash[arr[1]] * 2) {	
      // 返回的为数字型
      return arr[0] * 1
    } else {
      return -1
    }
}
const nums = [1, 2, 3, 4]
console.log(dominantIndex(nums))

var dominantIndex = function(nums) {
  let max1 = max2 = maxIndex =  0
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > max2) {
          max2 = Math.min(nums[i],max1)
          if(nums[i] > max1) {
              max1 = nums[i]
              maxIndex = i
          }
      }
  }
  return max1 / max2 >= 2 ? maxIndex : -1
}
