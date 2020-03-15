/**
 * @param {number[]} heights
 * @return {number}
 */
// 非最小移动人数
var heightChecker = function(heights) {
  let len = heights.length
  let res = 0
  for (let i = 0; i < len - 1; ++i) {
    let flag = true
    for (let j = i + 1; j < len && flag; ++j) {
      if (heights[j] < heights[i]) {
        flag = false
        const temp = heights[i]
        heights[i] = heights[j]
        heights[j] = temp
        res++
      }
    }
  }
  return res
};

var heightChecker = function(heights) {
  const _heights = new Array(...heights).sort()
  console.warn('_heights', _heights)
  let res = 0
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] !== _heights[i]) {
      res++
    }
  }
  return res
};

// 统计排序
var heightChecker = function(heights) {
  const arr = new Array(101).fill(0)
  heights.forEach((item, index) => {
    arr[item]++
  })
  let res = 0
  for (let i = 1, j = 0; i < arr.length; i++) {
    while (arr[i]-- > 0) {
      if (heights[j++] !== i) {
        res++
      }
    }
  }
  return res
}

const heights = [1,1,4,2,1,3]

heightChecker(heights)
