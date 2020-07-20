/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * @description 压缩搜索范围
 */

var searchMatrix = function(matrix, target) {
  if (matrix[0] === undefined) {
    return false
  }
  let rightPointer = matrix[0].length - 1
  let topPointer = 0
  while (rightPointer >= 0 && topPointer < matrix.length) {
    const current = matrix[topPointer][rightPointer]
    if (current > target) {
      --rightPointer
    } else if (current < target) {
      ++topPointer
    } else {
      return true
    }
  }
  return false
};