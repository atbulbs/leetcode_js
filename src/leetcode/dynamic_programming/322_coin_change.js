/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   coins.sort((a, b) => b - a)
//   console.warn('coins', coins)
//   let target = amount
//   let res = 0
//   let pointer = 0
//   let sum = 0
//   while (target > 0 && pointer < coins.length) {
//     if (coins[pointer] > target) {
//       console.warn('下一个')
//       pointer++
//     } else {
//       const count = Math.floor(target / coins[pointer])
//       console.warn('count', count)
//       const temp = count * coins[pointer]
//       sum += temp
//       console.warn('sum', sum)
//       target -= temp
//       console.warn('target', target)
//       pointer++
//       res += count
//     }
//   }
//   return sum === amount ? res : -1
// };
// [4, 3] 9

// var coins = [186,419,83,408]
// var amount = 6249

// coinChange(coins, amount)

// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
//   if (amount <= 0) {
//     return 0
//   } else {
//     const cache = {}
//     coins.forEach(item => {
//       cache[item] = 1
//     })
//     function helper (_amount) {
//       // console.warn('_amount', _amount)
//       if (cache[_amount] !== undefined) {
//         return cache[_amount]
//       } else {
//         if (_amount < 0) {
//           return -1
//         } else {
//           // 子问题的结果数组
//           const arr = []
//           // 是否每一个子问题都返回-1
//           let flag = true
//           for (let i = 0; i < coins.length; ++i) {
//             if (_amount - coins[i] < 0) {
//               arr[i] = -1
//             } else {
//               flag = false
//               arr[i] = helper(_amount - coins[i]) + 1
//             }
//           }
//           if (flag) {
//             cache[_amount] = -1
//             return -1
//           } else {
//             let min = undefined
//             let hasMin = false
//             arr.forEach(item => {
//               if (item > 0) {
//                 if (hasMin === false) {
//                   min = item
//                 } else {
//                   if (item < min) {
//                     min = item
//                   }
//                 }
//                 hasMin = true
//               }
//             })
//             if (hasMin) {
//               cache[_amount] = min
//               return cache[_amount]
//             } else {
//               cache[_amount] = -1
//               return -1
//             }
//           }
//         }
//       }
//     }
//     return helper(amount)
//   }
// };
// 没有总结, 形成方法论, 下一次又做不出来了, 浪费时间,
// 所以要提升思想境界, 总结方法论, 内功心法, 并复述出来
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
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

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   if (amount <= 0) {
//     return 0
//   }
//   var coins = coins
//   var cache = {}
//   function makeChange (amount) {
//     if (amount === 0) {
//       return []
//     } else if (cache[amount] !== undefined) {
//       return cache[amount]
//     } else {
//       var min = []
//       var newMin
//       var newAmount
//       for (var i = 0; i < coins.length; i++) {
//         var coin = coins[i]
//         newAmount = amount - coin
//         if (newAmount >= 0) {
//           newMin = makeChange(newAmount)
//         }
//         if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
//           min = [coin].concat(newMin)
//         }
//       }
//       cache[amount] = min
//       return min
//     }
//   }
//   return makeChange(amount).length || -1
// };

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//
// 定义dp(total, n)为总金额为total且最后一枚硬币为面值n时最小硬币个数
// coins[i]为每种硬币的面值
// dp(total, n) = min(dp(total - n, coins[i])) + 1
// var coinChange = function(coins, amount) {
//   let res
//   if(amount < 0) {
//     return -1
//   }
//   for (let i = 0; i < coins.length; ++i) {
//     const value = coins[i]
//     let _res
//     if (value < amount) {
//       _res = coinChange(coins, amount - value) + 1
//     } else if (value === amount) {
//       _res = 1
//     } else {
//       _res = -1
//     }
//     if (res === undefined) {
//       res = _res
//     }
//     if (_res !== -1 && _res !== 0 && _res < res) {
//       res = _res
//     }
//   }
//   return res || -1
// };
// 定义状态dp(i)为总金额为i时的最小找零数量
// 状态转移方程dp(i) = min(dp(i - n)) + 1
var coinChange = function(coins, amount) {
  if (amount <= 0) {
    return 0
  }
  const memory = {}
  function dp (amount) {
    if (memory[amount] !== undefined) {
      return memory[amount]
    }
    let res
    for (let i = 0; i < coins.length; ++i) {
      // 当前选择的硬币的面值
      const value = coins[i]
      if (value < amount) {
        // 找出这枚硬币以后剩余的总金额
        const remain = dp(amount - value)
        if (remain !== -1) {
          if (res === undefined) {
            res = remain + 1
          }
          if (remain + 1 < res) {
            res = remain + 1
          }
        }
      } else if (value === amount) {
        // 这枚硬币的面值刚好等于总金额, 则退出循环
        res = 1
        break
      }
    }
    // 考虑每一枚硬币的面值都大于总金额
    if (res === undefined) {
      res = -1
    }
    return memory[amount] = res
  }
  return dp(amount)
};

var coins = [186,419,83,408]
var amount = 6249

console.warn(coinChange(coins, amount), 20)

var coins = [2]
var amount = 3

console.warn(coinChange(coins, amount), -1)

var coins = [1, 2, 5]
var amount = 11
console.warn(coinChange(coins, amount), 3)
