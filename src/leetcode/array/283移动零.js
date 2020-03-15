// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。 不return
// 尽量减少操作次数。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 1) {
      return nums
    } else {
      let k = 0
      for (let i = 1; i < nums.length; i++) {
        if (nums[k] === 0) {
          if (nums[i] !== 0) {
            // nums[k] ^= nums[i]
            // nums[i] ^= nums[k]
            // nums[k++] ^= nums[i]
            let t = nums[k]
            nums[k++] = nums[i]
            nums[i] = t
          }
        } else {
          k++
        }
      }
      return nums
    }
}

var moveZeroes = function(nums) {
  let ln = nums.length
  for (let i = 0; i < ln; i++) {
    if (nums[i] === 0) {
      nums.splice(i--, 1)
      nums.push(0)
      ln--
    }
  }
}
var test1 = [0,1,0,3,12]
var test2 = [1, 0]
var test3 = [2, 1]
var test4 = [1, 0, 1]

console.log(moveZeroes(test1))
console.log(moveZeroes(test2))
console.log(moveZeroes(test3))
console.log(moveZeroes(test4))