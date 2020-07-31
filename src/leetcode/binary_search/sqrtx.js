/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x
  } else {
    let left = 1
    let right = x / 2
    while (left + 1 < right) {
      let mid = left + (right - left) / 2
      if (mid === x / mid) {
        return mid
      } else if (mid < x / mid) {
        left = mid
      } else {
        right = mid
      }
    }
    return right > x / right ? left : right
  }
}