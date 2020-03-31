/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  let min = 50000
  let max = -50000
  nums.forEach(item => {
    if (item > max) {
      max = item
    }
    if (item < min) {
      min = item
    }
  })
  const counterArr = new Array(max - min + 1)
  for (let i = 0; i < nums.length; ++i) {
    if (counterArr[nums[i] - min] === undefined) {
      counterArr[nums[i] - min] = 1
    } else {
      ++counterArr[nums[i] - min]
    }
  }
  const res = []
  counterArr.forEach((item, index) => {
    while (item > 0) {
      res.push(min + index)
      --item
    }
  })
  return res
};

console.warn(sortArray([5,1,1,2,0,0]))
console.warn(sortArray([5,2,3,1]))