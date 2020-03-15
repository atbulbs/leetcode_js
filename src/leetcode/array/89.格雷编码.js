// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

// 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。

// 示例 1:

// 输入: 2
// 输出: [0,1,3,2]
// 解释:
// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2

// 对于给定的 n，其格雷编码序列并不唯一。
// 例如，[0,2,3,1] 也是一个有效的格雷编码序列。

// 00 - 0
// 10 - 2
// 11 - 3
// 01 - 1

// 示例 2:

// 输入: 0
// 输出: [0]

// 输入: 3
// 000
// 001
// 011
// 010

// 110
// 111
// 101
// 100

// 解释: 我们定义格雷编码序列必须以 0 开头。
//      给定编码总位数为 n 的格雷编码序列，其长度为 2^n。当 n = 0 时，长度为 2^0 = 1。
//      因此，当 n = 0 时，其格雷编码序列为 [0]。

/**
 * 寻找规律, 动态输入
 **/

var grayCode = function(n) {
  let res
  if (n === 0) {
    res = [0]
  } else if (n === 1) {
    res = [0, 1]
  } else {
    res = grayOne(n)
  }
  function grayOne (n) {
    let res = []
    if (n === 2) {
      res =  [ '00', '01', '11', '10' ]
    } else {
      const prev = grayOne(n - 1)
      const max = Math.pow(2, n)
      const middle = max / 2 - 1
      for (let i = 0; i <= middle; i++ ) {
        res[i] = '0' + prev[i]
        res[max - i - 1] = '1' + prev[i]
      }
    }
    return res
  }
  res.forEach((item, index) => {
    res[index] = parseInt(item, 2)
  })
  return res
};

grayCode(4)