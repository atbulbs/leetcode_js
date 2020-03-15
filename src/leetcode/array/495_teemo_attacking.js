/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length === 0) {
    return 0
  } else {
    let res = duration
    const len = timeSeries.length
    for (let i = 1; i < len; ++i) {
      res += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
    }
    return res
  }
};