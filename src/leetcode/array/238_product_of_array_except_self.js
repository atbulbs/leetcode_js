
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = []
  let leftTotal = 1
  let leftArr = []
  let rightTotal = 1
  let rightArr = []
  const length = nums.length
  for (let i = 0; i < length; ++i) {
    leftArr.push(leftTotal)
    leftTotal *= nums[i]
    rightArr[length - i - 1] = rightTotal
    rightTotal *= nums[length - i - 1]
  }
  for (let j = 0; j < length; ++j) {
    res.push(leftArr[j] * rightArr[j])
  }
  // console.warn('leftArr', leftArr)
  // console.warn('rightArr', rightArr)
  // console.warn('res', res)
  return res
};

var productExceptSelf = function(nums) {
  const length = nums.length
  let res = new Array(length).fill(1)
  let leftTotal = 1
  let rightTotal = 1
  for (let i = 0; i < length; ++i) {
    res[i] = leftTotal
    leftTotal *= nums[i]
    res[length - i - 1] *= rightTotal
    rightTotal *= nums[length - i - 1]
  }
  // console.warn('leftArr', leftArr)
  // console.warn('rightArr', rightArr)
  console.warn('res', res)
  return res
};
productExceptSelf([1,2,3,4])