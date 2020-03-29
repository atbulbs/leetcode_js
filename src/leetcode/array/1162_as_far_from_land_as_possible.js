/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  const land = []
  const sea = []
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === 1) {
        land.push(i)
        land.push(j)
      } else {
        sea.push(i)
        sea.push(j)
      }
    }
  }
  if (land.length === 0 || sea.length === 0) {
    return -1
  } else {
    let res = 0
    for (let i = 0; i < sea.length; i += 2) {
      let minDistance = 10000
      for (let j = 0; j < land.length; j += 2) {
        const distance = Math.abs(sea[i] - land[j]) + Math.abs(sea[i + 1] - land[j + 1])
        minDistance = Math.min(minDistance, distance)
      }
      res = Math.max(res, minDistance)
    }
    return res
  }
};

var grid = [[1,0,0],[0,0,0],[0,0,0]]
console.warn(maxDistance(grid), 4)
var grid = [[1,0,1],[0,0,0],[1,0,1]]
console.warn(maxDistance(grid), 2)