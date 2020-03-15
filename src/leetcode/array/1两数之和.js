// 给定 nums = [2, 7, 11, 15], target = 9
const nums = [2, 7, 11, 15]
const target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = ''
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          res =  [i, j]
        }
      }
    }
    return res
}

console.log(twoSum(nums, target))