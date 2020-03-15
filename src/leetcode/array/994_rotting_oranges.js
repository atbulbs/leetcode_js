/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rows = grid.length
  const columns = grid[0].length
  let t = 0
  let hasFresh
  while (t++ < rows * columns) {
    hasFresh = false
    const toRot = []
    for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < columns; ++j) {
        if (grid[i][j] === 2) {
          // 上
          if (i > 0 && grid[i - 1][j] === 1) {
            toRot.push([i - 1, j])
          }
          // 右
          if (j < columns - 1 && grid[i][j + 1] === 1) {
            toRot.push([i, j + 1])
          }
          // 下
          if (i < rows - 1 && grid[i + 1][j] === 1) {
            toRot.push([i + 1, j])
          }
          // 左
          if (j > 0 && grid[i][j - 1] === 1) {
            toRot.push([i, j - 1])
          }
        }
        if (grid[i][j] === 1) {
          hasFresh = true
        }
      }
    }
    if (toRot.length === 0) {
      break
    } else {
      toRot.forEach(item => {
        grid[item[0]][item[1]] = 2
      })
    }
  }
  return hasFresh ? -1 : --t
};

var grid = [[2,1,1],[1,1,0],[0,1,1]]
grid = [[2,1,1],[0,1,1],[1,0,1]]
orangesRotting(grid)