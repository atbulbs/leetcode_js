/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  } else if (len === 1) {
    return nums[0]
  } else if (len === 2) {
    return Math.max(nums[0], nums[1])
  } else if (len === 3) {
    return Math.max(nums[1], nums[0] + nums[2])
  }
  const memory = {
    0: nums[0],
    1: Math.max(nums[0], nums[1]),
    2: Math.max(nums[1], nums[0] + nums[2])
  }
  // 获取到当前索引的最大结果
  function getCurMax (index) {
    if (index < 0) {
      return 0
    }
    if (memory[index] === undefined) {
      // 如果选择这个数字
      const selectCur = nums[index] + Math.max(getCurMax(index - 2), getCurMax(index - 3))
      // 如果不选择这个数字
      const notSelectCur = Math.max(getCurMax(index - 1), getCurMax(index - 2))
      memory[index] = Math.max(selectCur, notSelectCur)
      return memory[index]
    } else {
      return memory[index]
    }
  }
  let res = 0
  for (let index = 0; index < len; ++index) {
    res = Math.max(getCurMax(index), res)
  }
  return res
};

var massage = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  } else if (len === 1) {
    return nums[0]
  } else if (len === 2) {
    return Math.max(nums[0], nums[1])
  } else if (len === 3) {
    return Math.max(nums[1], nums[0] + nums[2])
  }
  let res = 0
  for (let index = 0; index < len; ++index) {
    // 包含这个数字时, 下一个数字可能是后面第二个数字或者后面第三个数字
    const curSelect = nums[index] + Math.max(massage(nums.slice(index + 2)), massage(nums.slice(index + 3)))
    // 更新最大数字
    res = Math.max(curSelect, res)
  }
  return res
};

console.warn('[1,2,3,1]', massage([1,2,3,1]))
console.warn('[2,7,9,3,1]', massage([2,7,9,3,1]))
console.warn('[2,1,4,5,3,1,1,3]', massage([2,1,4,5,3,1,1,3]))