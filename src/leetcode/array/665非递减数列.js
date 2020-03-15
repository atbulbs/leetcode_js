// 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。

// 我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。

// 示例 1:

// 输入: [4,2,3]
// 输出: True
// 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
// 示例 2:

// 输入: [4,2,1]
// 输出: False
// 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
// 说明:  n 的范围为 [1, 10,000]。


// 思维: 除去某元素后, 数组是升序的
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    // function isAscendant (arr) {	
    //   let tmp = [...arr]
    //   let sortedTmp = tmp.sort((a, b) => a - b)
    //   return arr.toString() === sortedTmp.toString()
    // }
    // if (isAscendant(tmp)) {	
    //   return true
    // }
    // 注意暂存
    let ln = nums.length
    let ln_ = ln - 1
    for(let i = 0; i < ln; i++) {
      let el = nums.splice(i, 1)
      let flag = true
      for (let j = 0; j < ln_; j++) {
        if (nums[j] > nums[j + 1]) {	
          flag = false
          break
        }
      }
      if (flag) {	
        return true
      }
      nums.splice(i, 0, el)
    }
    return false 
}

const test = [4,2,1]
console.log(checkPossibility(test))