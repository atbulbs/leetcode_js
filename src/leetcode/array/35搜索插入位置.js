// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 注意考虑各种情况
var searchInsert = function(nums, target) {
    const ln = nums.length
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {	
        return i
      }
      if (nums[i] < target && nums[i + 1] > target) {	
        return i + 1
      }
      if (target < nums[0]) {
        return 0	
      }
      if (target > nums[ln - 1]) {	
        return ln
      }
    }
}

const nums = [1,3,5,6]
const target = 5
console.log(searchInsert(nums, target))

var searchInsert = function(nums, target) {
  if (nums.includes(target)) {
      return nums.indexOf(target);
    }
    return nums.filter(el => el < target).length;
  };