// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 示例:

// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = []
  // 定义递归, 通过当前结果数组和当前字符串, 查找一个ip 
  function findSubIp (subArr, subStr) {
    // 如果当前数组的长度为4, 而且组合的字符串是完整的, 入res
    if (subArr.length === 4 && s === subArr.join('')) {
      res.push(subArr.join('.'))
    } else {
      for (let i = 0; i < Math.min(3, subStr.length); i++) {
        let temp = subStr.substr(0, i + 1)
        if (temp < 256) {
          if (!(temp[0] === '0' && temp.length > 1)) {
            findSubIp(subArr.concat([temp]), subStr.substr(i + 1))
          }
        }
      }
    }
  }
  // 启动递归
  findSubIp([], s)
  return res
};

console.warn(restoreIpAddresses('25525511135'))
console.warn(restoreIpAddresses('010010'))