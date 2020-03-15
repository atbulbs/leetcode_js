/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = []
  for(var i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (val !== i + 1) {
      nums[i] ^= nums[val - 1]
      nums[val - 1] ^= nums[i]
      nums[i] ^= nums[val - 1]
    }
  }
  console.warn('nums', nums)
  
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])