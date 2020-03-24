/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  let res = 0
  const rows = grid.length
  const columns = grid[0].length
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      const v = grid[i][j]
      if (v !== 0) {
        res += 4 * v + 2
        if (grid[i + 1] !== undefined && grid[i + 1][j] !== undefined && grid[i + 1][j] !== 0) {
          res -= Math.min(v, grid[i + 1][j]) * 2
        }
        if (grid[i][j + 1] !== undefined && grid[i][j + 1] !== 0) {
          res -= Math.min(v, grid[i][j + 1]) * 2
        }
      }
    }
  }
  return res
};

var surfaceArea = function(grid) {
  let res = 0
  const rows = grid.length
  const columns = grid[0].length
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      const v = grid[i][j]
      if (v !== 0) {
        res += ((v << 2) + 2)
        if (grid[i + 1] !== undefined && grid[i + 1][j] !== undefined && grid[i + 1][j] !== 0) {
          res -= (Math.min(v, grid[i + 1][j]) << 1)
        }
        if (grid[i][j + 1] !== undefined && grid[i][j + 1] !== 0) {
          res -= (Math.min(v, grid[i][j + 1]) << 1)
        }
      }
    }
  }
  return res
};

var grid = [[1,2],[3,4]]

console.warn(surfaceArea(grid))

var grid = [[1,0],[0,2]]

console.warn(surfaceArea(grid))