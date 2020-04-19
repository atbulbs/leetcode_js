/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const map = {
    1: {
      left: [1, 4, 6],
      right: [1, 3, 5]
    },
    2: {
      top: [2, 3, 4],
      bottom: [2, 5, 6]
    },
    3: {
      left: [1, 4, 6],
      bottom: [2, 5, 6]
    },
    4: {
      right: [1, 3, 5],
      bottom: [2, 5, 6]
    },
    5: {
      top: [2, 3, 4],
      left: [1, 4, 6]
    },
    6: {
      top: [2, 3, 4],
      right: [1, 3, 5],
    }
  }
  const m = grid.length - 1
  const n = grid[0].length - 1
  let curRow = 0
  let curColumn = 0
  let count = 0
  while (grid[curRow][curColumn] !== undefined && count <= m * n) {
    if (grid[curRow][curColumn] === 1) {
      ++curColumn
    } else if (grid[curRow][curColumn] === 2) {
      ++curRow
    } else if (grid[curRow][curColumn] === 3) {
      ++curRow
    } else if (grid[curRow][curColumn] === 4) {
      ++curColumn
    } else if (grid[curRow][curColumn] === 5) {
      --curRow
    } else if (grid[curRow][curColumn] === 6) {
      --curRow
    }
  }
  return curRow === m && curColumn === n
};