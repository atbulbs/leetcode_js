/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
  let res = 0
  for (let i = 0; i < coins.length; ++i) {
    const coin = coins[i]
    if ((coin & 1) === 1) {
      res += (1 + coin >> 1)
    } else {
      res += (coin >> 1)
    }
  }
  return res
};


console.warn(minCount([4,2,1]) === 4)
console.warn(minCount([2,3,10]) === 8)