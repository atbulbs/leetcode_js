// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]

// 进阶：

// 你可以优化你的算法到 O(k) 空间复杂度吗？

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let memory = {
      '0': [1],
      '1': [1, 1]
    }
    if (memory[rowIndex]) {
      return memory[rowIndex]
    } else {
      memory[rowIndex] = []
      for (let i = rowIndex; i >= 0; i--) {
        if (i === 0 || i === rowIndex) {
          memory[rowIndex][i] = 1
        } else if (i === 1 || i === rowIndex - 1) {
          memory[rowIndex][i] = rowIndex
        } else {
          memory[rowIndex][i] = getRow(rowIndex - 1)[i] + getRow(rowIndex - 1)[i - 1]
        }
      }
    }
    return memory[rowIndex]
};

console.warn(getRow(1))
console.warn(getRow(2))
console.warn(getRow(3))
console.warn(getRow(4))
console.warn(getRow(5))
console.warn(getRow(6))
console.warn(getRow(7))
console.warn(getRow(8))
console.warn(getRow(9))
console.warn(getRow(10))

