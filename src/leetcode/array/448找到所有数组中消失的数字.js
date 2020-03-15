// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]
// [1, 2, 3, 3, 4, 7, 8]
//  0  1  2  3  4  5  6
// 输出:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let ln = nums.length
  let res = []
  let hash = {}
  for (let i = 0; i < ln; i++) {
    if (!hash[i + 1]) {	
      hash[i + 1] = 1
    }
    if (nums.indexOf(i + 1) === -1) {	
      res.push(i + 1)
    } else {
      if (!hash[i + 1]) {	
        ln++
      }
    }
  }
  return res
}

const test = [4,3,2,7,8,2,3,1]
console.log(findDisappearedNumbers(test))