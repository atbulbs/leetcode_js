// 给定一个矩阵 A， 返回 A 的转置矩阵。

// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

 

// 示例 1：

// 输入：[
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9]
  // ]
// 输出：[
    //   [1,4,7],
    //   [2,5,8],
    //   [3,6,9]
    // ]
// 示例 2：

// 输入：[[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]
 

// 提示：

// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  const res = []
  const L = A[0].length // 注意行列的长度也交换了
  const R = A.length
  for (let i = L - 1; i >= 0; i--) {
    res[i] = []
    for (let j = R - 1; j >= 0; j--) {
      res[i][j] = A[j][i]
    }
  }
  return res
};

console.warn(transpose([[1,2,3],[4,5,6]]))