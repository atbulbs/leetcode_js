/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 3) {
      n /= 3
    }
    return n === 3
};