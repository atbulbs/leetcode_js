/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  function dp (i, j) {
    if (i === 0 && j === 0) {
      return grid[0][0]
    }
    if (i === 0) {
      return dp(i, j - 1) + grid[i][j]
    }
    if (j === 0) {
      return dp(i - 1, j) + grid[i][j]
    }
    return Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i][j]
  }
  return dp(grid.length - 1, grid[0].length - 1)
};

var minPathSum = function(grid) {
  const memory = {}
  function dp (i, j) {
    if (i === 0 && j === 0) {
      return grid[0][0]
    }
    if (memory[i] === undefined) {
      memory[i] = {}
    }
    if (memory[i][j] !== undefined) {
      return memory[i][j]
    }
    if (i === 0) {
      return memory[i][j] = dp(i, j - 1) + grid[i][j]
    }
    if (j === 0) {
      return memory[i][j] = dp(i - 1, j) + grid[i][j]
    }
    return memory[i][j] = Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i][j]
  }
  return dp(grid.length - 1, grid[0].length - 1)
};