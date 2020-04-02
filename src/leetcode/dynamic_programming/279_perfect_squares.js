// value 与 val不能一样
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n <= 0) {
    return 0
  }
  const perfectSquares = []
  const maxSquare = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= maxSquare; ++i) {
    perfectSquares.push(i * i)
  }
  var coinChange = function(coins, amount) {
    if (amount <= 0) {
      return 0
    } else {
      const cache = {}
      coins.forEach(item => {
        cache[item] = 1
      })
      function helper (_amount) {
        if (cache[_amount] !== undefined) {
          return cache[_amount]
        } else {
          if (_amount < 0) {
            cache[_amount] = -1
            return -1
          } else {
            // 子问题的最小结果
            let min = -1
            for (let i = 0; i < coins.length; ++i) {
              if (_amount - coins[i] > 0) {
                const temp = helper(_amount - coins[i]) + 1
                if (temp !== 0) {
                  if (min === -1) {
                    min = temp
                  } else if (temp < min) {
                    min = temp
                  }
                }
              }
            }
            return cache[_amount] = min
          }
        }
      }
      return helper(amount)
    }
  };
  return coinChange(perfectSquares, n)
};

console.warn(numSquares(12))
console.warn(numSquares(13))
console.warn(numSquares(18))