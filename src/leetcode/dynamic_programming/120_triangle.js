/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 0) {
    return 0
  } else if (triangle.length === 1) {
    return triangle[0][0]
  } else if (triangle.length === 2) {
    return triangle[0][0] + Math.min(triangle[1][0], triangle[1][1])
  } else {
    let res = 0
    function pickN (n) {
      if (n === 1) {
        res += triangle[0][0]
        return 0
      } else if (n === 2) {
        if (triangle[1][0] < triangle[1][1]) {
          res += triangle[0][0]
          res += triangle[1][0]
          return 0
        } else {
          res += triangle[0][0]
          res += triangle[1][1]
          return 1
        }
      } else {
        const preIndex = pickN(n - 1)
        if (triangle[n - 1][preIndex] < triangle[n - 1][preIndex + 1]) {
          res += triangle[n - 1][preIndex]
          return preIndex
        } else {
          res += triangle[n - 1][preIndex + 1]
          return preIndex + 1
        }
      }
    }
    pickN(triangle.length)
    return res
  }
};

var arr = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]

// arr = [[-1],[2,3],[1,-1,-3]] // -1

var minimumTotal = function(triangle) {
  function dp (i, j) {
    if (i === 0) {
      return triangle[0][0]
    }
    if (i === j) {
      return dp(i - 1, j - 1) + triangle[i][j]
    }
    if (j === 0) {
      return dp(i - 1, 0) + triangle[i][j]
    }
    return Math.min(dp(i - 1, j), dp(i - 1, j - 1)) + triangle[i][j]
  }
  let res
  for (let k = 0; k < triangle[triangle.length - 1].length; ++k) {
    const _res = dp(triangle.length - 1, k)
    if (res === undefined) {
      res = _res
    } else {
      res = Math.min(res, _res)
    }
  }
  return res
};

var minimumTotal = function(triangle) {
  const memory = {}
  function dp (i, j) {
    if (memory[i] === undefined) {
      memory[i] = {}
    } else {
      if (memory[i][j] !== undefined) {
        return memory[i][j]
      }
    }
    if (i === 0) {
      return memory[i][j] = triangle[0][0]
    }
    if (i === j) {
      return memory[i][j] = dp(i - 1, j - 1) + triangle[i][j]
    }
    if (j === 0) {
      return memory[i][j] =  dp(i - 1, 0) + triangle[i][j]
    }
    return memory[i][j] =  Math.min(dp(i - 1, j), dp(i - 1, j - 1)) + triangle[i][j]
  }
  let res
  for (let k = 0; k < triangle[triangle.length - 1].length; ++k) {
    const _res = dp(triangle.length - 1, k)
    if (res === undefined) {
      res = _res
    } else {
      res = Math.min(res, _res)
    }
  }
  return res
};

console.warn(minimumTotal(arr))