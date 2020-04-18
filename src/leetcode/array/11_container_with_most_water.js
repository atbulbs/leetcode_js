/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0
  for (let i = 0; i < height.length - 1; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      const area = Math.min(height[i], height[j]) * (j - i)
      maxArea = Math.max(maxArea, area)
    }
  }
  return maxArea
};