/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const res = []
  let pointer = 0
  while (pointer < nums.length) {
    res.splice(index[pointer], 0, nums[pointer])
    pointer++
  }
  return res
};

var nums = [0,1,2,3,4], index = [0,1,2,2,1];
var nums = [1,2,3,4,0], index = [0,1,2,3,0];
console.warn(createTargetArray(nums, index))