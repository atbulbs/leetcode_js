/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftPointer = 0
  let rightPointer = height.length - 1
  let res = 0
  while (leftPointer < rightPointer) {
    const leftHeight = height[leftPointer]
    const rightHeight = height[rightPointer]
    const area = (rightPointer - leftPointer) * Math.min(leftHeight, rightHeight)
    res = Math.max(res, area)
    if (leftHeight < rightHeight) {
      ++leftPointer
    } else {
      --rightPointer
    }
  }
  return res
};