// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

// 示例 1:

// 输入: [3, 2, 1]

// 输出: 1

// 解释: 第三大的数是 1.
// 示例 2:

// 输入: [1, 2]

// 输出: 2

// 解释: 第三大的数不存在, 所以返回最大的数 2 .
// 示例 3:

// 输入: [2, 2, 3, 1]

// 输出: 1

// 解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
// 存在两个值为2的数，它们都排第二。

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // 如果有花括号, 记得return
  nums.sort((a, b) => {	
    return b - a
  })
  let max = nums[0]
  let second = null
  // 用空间换时间
  let second_index = null
  let third = null
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < max) {	
      second = nums[i]
      second_index = i
      break
    }
  }
  for (let j = second_index + 1; j < nums.length; j++) {
    if (nums[j] < second) {	
      return nums[j]
    }
  }
  return max
}

const nums = [2,1]
console.log(thirdMax(nums))