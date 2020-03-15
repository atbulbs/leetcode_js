/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let res = 0
  while (num !== 0) {
    if ((num & 1) === 1) {
      --num
    } else {
      num >>= 1
    }
    ++res
  }
  return res
};