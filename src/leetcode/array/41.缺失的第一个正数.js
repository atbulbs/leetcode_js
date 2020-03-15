// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1
// 说明:

// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const len = nums.length - 1
  let res 
  if (len === -1) {
    res = 1
  }
  if (len === 0) {
    if (nums[0] <= 0) {
      return 1
    } else if (nums[0] > 1) {
      return 1
    } else {
      return 2
    }
  }
  if (len === 1) {
    if (nums[0] > nums[1]) {
      nums[0] ^= nums[1]
      nums[1] ^= nums[0]
      nums[0] ^= nums[1]
    }
    // [-1, -2]
    // [-1, 1]
    // [0, 1]
    // [1, 2]
    if (nums[0] <= 0) {
      if (nums[1] <= 0) {
        return 1
      }
      if (nums[1] > 1) {
        return 1
      }
      if (nums[1] === 1) {
        return 2
      }
    } 
    // [1,1000]
    if (nums[0] === 1) {
      if (nums[1] === 1) {
        return 2
      }
      if (nums[1] === 2) {
        return 3
      }
      if (nums[1] > 2) {
        return 2
      }
    }
    if (nums[0] > 1) {
      return 1
    }
  }
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j <= len; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      nums[i] ^= nums[minIndex]
      nums[minIndex] ^= nums[i]
      nums[i] ^= nums[minIndex]
    }
    if (nums[0] > 1) {
      res = 1
      break
    }
    if (i > 0 && nums[0] < 0) {
      if (nums[1] > 1) {
        res =  1
        break
      } else if (nums[1] === 1) {
        if (i > 1 && nums[2] > 2) {
          res = 2
          break
        }
      }
    }
    if (i > 0 && nums[i - 1] >= 0) {
      if (nums[i] - nums[i - 1] > 1) {
        res =  nums[i - 1] + 1
        break
      }
    }
    if (i > 0 && nums[i - 1] <= 0) {
      if (nums[i] > 1) {
        res = 1
        break
      }
    }
    if (i === len - 1) {
      if (nums[len] >= 0) {
        if (nums[len] === 1) {
          res = 2
        } else {
          if (nums[len] - nums[len - 1] === 1 || nums[len] - nums[len - 1] === 0) {
            res = nums[len] + 1
          } else {
            res = nums[len - 1] + 1 
          }
        }
      } else {
        res = 1
      }
    }
  }

  console.warn(nums, res)
  return res
};

// firstMissingPositive([1,2,0])
// firstMissingPositive([0,-1,3,1])
// firstMissingPositive([7,8,9,11,12])
// firstMissingPositive([1000,-1])
// firstMissingPositive([3,4,-1,1])
// firstMissingPositive([0,2,2,1,1])
// firstMissingPositive([-10,-3,-100,-1000,-239,1])
// firstMissingPositive([11,-6,-4,-7,20,57,57,18,61,41,3,33,30,58,17,46,14,55,-3,-6,23,9,26,-5,27,57,26,44,-4,36,36,17,56,59,20,14,54,31,42,53,11,-1,41,51,11,12,36,51,5,59,56,55,6,36,60,59,31,40,41,37,30,32])

