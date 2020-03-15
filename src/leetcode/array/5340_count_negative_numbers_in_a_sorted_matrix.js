/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let res = 0
  for (let i = grid.length - 1; i >= 0; --i) {
    for (let j = grid[0].length - 1; j >= 0; --j) {
      if (grid[i][j] < 0) {
        ++res
      } else {
        break
      }
    }
  }
  return res
};