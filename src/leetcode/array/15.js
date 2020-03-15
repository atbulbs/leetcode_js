// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_ = function(nums) {
  function twoSum (nums, target) {
    var res = []
    for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          res.push([nums[i], nums[j]])
        }
      }
    }
    return res
  }
  function noRepeat (arr) {	
    let hash = {}
    for (let j = 0; j < arr.length; j++) {
      if (!hash[arr[j].toString()]) {	
        hash[arr[j].toString()] = arr[j]
      }
    }
    return hash
  }
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let el = nums.splice(i, 1)
    let arr = [...el]
    let res_ = twoSum(nums, 0 - el)
    if (res_.length) {
      for (let i = 0; i < res_.length; i++) {
        res_[i].push(...el)
        res.push(res_[i].sort((a, b) => a - b))
      }
    }
    nums.splice(i, 0, el)
  }
  let hash = noRepeat(res)
  let result = []
  Object.keys(hash).forEach((key) => {	
    result.push(hash[key])
  })
  return result
}
var threeSum = function (nums) {
  let res = []
  let hash = {}	
  for (let i = 0; i < nums.length; i++) {
    let elI = nums.splice(i, 1)[0]
    for (let j = 0; j < nums.length; j++) {
      let elJ = nums.splice(j, 1)[0]
      for (let k = 0; k < nums.length; k++) {
        // 在循环里去重
        let elK = nums[k]
        if (elI + elJ + elK === 0) {	
          let key = [elI, elJ, elK].sort((a, b) => a - b).toString()
          if (!hash[key]) {	
            hash[key] = [elI, elJ, nums[k]]
            res.push([elI, elJ, nums[k]])
            break
          }
        }
      }
      nums.splice(j, 0, elJ)
    }
    nums.splice(i, 0, elI)
  }
  return res
}
const test = [5,-9,-11,9,9,-4,14,10,-11,1,-13,11,10,14,-3,-3,-4,6,-15,6,6,-13,7,-11,-15,10,-8,13,-14]
console.log(threeSum(test))
