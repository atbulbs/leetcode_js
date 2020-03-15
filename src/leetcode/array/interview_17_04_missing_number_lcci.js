/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const countArr = new Array(nums.length + 1)
  nums.forEach(item => {
    countArr[item] = 1
  })
  for (let i = 0; i < countArr.length; ++i) {
    if (countArr[i] === undefined) {
      return i
    }
  }
};