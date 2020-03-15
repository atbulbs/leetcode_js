// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

// 注意你不能在买入股票前卖出股票。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let len1 = prices.length - 2
    let len2 = len1 + 1
    for (let i = 0; i <= len1; i++) {
      for (let j = i + 1; j <= len2; j++) {
        if (prices[j] - prices[i] > max) {
          max = prices[j] - prices[i]
        }
      }
    }
    return max
};
console.warn(maxProfit([1, 2]))

// 模拟过程, 获取相对之前历史每一天的最大收益, 更新最大收益
var maxProfit = function(prices) {
  let res = 0
  for (let i = 1; i < prices.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (prices[i] - prices[j] > res) {
        res = prices[i] - prices[j]
      }
    }
  }
  return res
};

// 记录历史最小值, 更新收益最大值
var maxProfit = function(prices) {
  let min = prices[0]
  let res = 0
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > min) {
      if (prices[i] - min > res) {
        res = prices[i] - min
      }
    } else {
      min = prices[i]
    }
  }
  return res
};

var maxProfit = function(prices) {
  let min = prices[0]
  let res = 0
  const len = prices.length
  for (let i = 1; i < len; ++i) {
    const sub = prices[i] - min
    if (sub > 0) {
      if (sub > res) {
        res = sub
      }
    } else {
      min = prices[i]
    }
  }
  return res
};
