/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x === 0 || y === 0) {
    return z === x + y
  } else if (x === y) {
    return z === x || z === 2 * x
  } else {
    let min = 0
    let max = 0
    if (x > y) {
      min = y
      max = x
    } else {
      min = x
      max = y
    }
    const n = Math.floor(max / min)
    const result = {}
    result[x + y] = true
    result[x] = true
    result[y] = true
    result[max - min] = true
    result[(n + 1) * min - max] = true
    for (let i = 1; i <= n; ++i) {
      result[n * x] = true
    }
    if (min > max - min) {
      result[max - (min - (max - min))] = true
      result[2 * min] = true
    }
    return result[z] === true
  }
};