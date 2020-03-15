/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = nums.length
  for (let i = 1; i < length; ) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1)
      length--
    } else {
      i++
    }
  }
  console.warn('nums', nums)
  return length
};

const test = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(test)