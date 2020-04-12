/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
  let res = 3
  for (let i = 0; i < (n * 3 - 1); ++i) {
    res *= 2
  }
  return res % 1000000007
};

console.warn(numOfWays(1))
console.warn(numOfWays(2))
console.warn(numOfWays(3))
console.warn(numOfWays(7))
console.warn(numOfWays(5000))