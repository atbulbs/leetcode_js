// 在杨辉三角中，每个数是它左上方和右上方的数的和

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
//
// [1, arr[i-1][j-1] + arr[i-1][j], 1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  for (let i = 0; i < numRows; i++) {
    res.push(new Array(i + 1))
    res[i][0] = 1
    res[i][res[i].length - 1] = 1
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}

console.log(generate(6))
