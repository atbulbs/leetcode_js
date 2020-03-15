// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

//  

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
//  

// 限制：

// 1 <= target <= 10^5
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  const res = []
  let flag = true
  // 个数
  let count = 2
  // 起始数
  let start
  while (flag) {
    start = (2 * (target / count) + 1 - count) / 2
    // 大于等于1的整数
    if (start >= 1 && start === Math.floor(start)) {
      const arr = []
      for (let i = 0; i < count; ++i) {
        arr[i] = start + i
      }
      res.push(arr)
    } else if (start < 0) {
      flag = false
    }
    ++count
  }
  return res.reverse()
};