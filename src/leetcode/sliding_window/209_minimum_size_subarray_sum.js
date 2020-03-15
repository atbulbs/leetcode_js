/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let sum = 0
  let leftPointer = 0
  let rightPointer = 0
  let res = nums.length
  let flag = false
  while (rightPointer < nums.length && sum < s) {
    // 向右移动右指针, 增加窗口宽度
    sum += nums[rightPointer]
    rightPointer++
    // 向右移动左指针, 减小窗口宽度
    while (sum >= s) {
      if (sum >= s && rightPointer - leftPointer <= res) {
        flag = true
        res = rightPointer - leftPointer
      }
      sum -= nums[leftPointer]
      leftPointer++
    }
  }
  return flag ? res : 0
};

var minSubArrayLen = function (s, nums) {
  let sum = 0
  let leftPointer = 0
  let rightPointer = 0
  let res = nums.length
  let flag = false
  while (leftPointer < nums.length && sum < s) {
    while (rightPointer < nums.length && sum < s) {
      sum += nums[rightPointer]
      if (sum >= s && rightPointer - leftPointer + 1 <= res) {
        flag = true
        res = rightPointer - leftPointer + 1
      }
      rightPointer++
    }

    leftPointer++
    rightPointer = leftPointer
    sum = 0
  }
  return flag ? res : 0
};

// var minSubArrayLen = function (s, nums) {
//   let sum = 0
//   let leftPointer = 0
//   let rightPointer = 0
//   let answerStart = 0
//   let answerEnd = 0
//   while (rightPointer < nums.length && sum < s) {

//     sum += nums[rightPointer]
//     if (sum >= s && rightPointer - leftPointer < answerStart - answerEnd) {
//       answerStart = leftPointer
//       answerEnd = rightPointer
//       console.warn('sum', sum)
//       console.warn('leftPointer', leftPointer)
//       console.warn('rightPointer', rightPointer)
//     }
//     rightPointer++

//     while (leftPointer < nums.length && sum < s) {
//       leftPointer++
//       sum -= nums[leftPointer]
//     }

//   }

//   console.warn('answerStart', answerStart)
//   console.warn('answerEnd', answerEnd)
// };

var minSubArrayLen = function (s, nums) {
  let sum = 0
  let leftPointer = 0
  let rightPointer = 0
  let res = nums.length
  let flag = false
  while (rightPointer < nums.length && sum < s) {
    // 向右移动右指针, 增加窗口宽度
    sum += nums[rightPointer]
    rightPointer++
    // 向右移动左指针, 减小窗口宽度
    while (sum >= s) {
      if (sum >= s && rightPointer - leftPointer <= res) {
        flag = true
        res = rightPointer - leftPointer
      }
      sum -= nums[leftPointer]
      leftPointer++
    }
  }
  return flag ? res : 0
};

var s = 7,
  nums = [2, 3, 1, 2, 4, 3]
// var s = 3,
//   nums = [1, 1]

console.warn(minSubArrayLen(s, nums))