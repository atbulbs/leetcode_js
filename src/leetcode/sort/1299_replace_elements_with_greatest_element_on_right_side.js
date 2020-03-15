/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 逆序遍历
var replaceElements = function(arr) {
  if (arr.length === 0) {
    return []
  } else if (arr.length === 1) {
    return [-1]
  } else {
    const len = arr.length
    const res = []
    res[len - 1] = -1
    let max = arr[len - 1]
    let pointer = len - 1
    while (pointer > 0) {
      max = Math.max(arr[pointer--], max)
      res[pointer] = max
    }
    return res
  }
};