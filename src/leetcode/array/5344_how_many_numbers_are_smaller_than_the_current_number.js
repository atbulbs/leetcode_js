/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const res = []
  const _nums = [...nums].sort((a, b) => a - b )
  const memory = {}
  _nums.forEach((item, index) => {
    while (--index > 0 && nums[index] !== item) {
      memory[item] = index + 1
    }
  })
  console.warn('_nums', _nums)
  nums.forEach(item => {
    res.push(memory[item])
  })
  return res
};