/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const hashTable = {}
  for (let i = 1; i <= n; ++i) {
    const bitSum = getBitSum(i)
    if (hashTable[bitSum] === undefined) {
      hashTable[bitSum] = []
    }
    hashTable[bitSum].push(i)
  }
  console.warn('hashTable', hashTable)
  function getBitSum (n) {
    let res = 0
    while (true) {
      if (n < 10) {
        res += n
        break
      } else {
        res += n % 10
        n = Math.floor(n / 10)
      }
    }
    return res
  }
  const lengthHashTable = {}
  let maxLength = 0
  for (let key in hashTable) {
    const arr = hashTable[key]
    if (arr.length > maxLength) {
      maxLength = arr.length
    }
    if (lengthHashTable[arr.length] === undefined) {
      lengthHashTable[arr.length] = 1
    } else {
      lengthHashTable[arr.length]++
    }
  }
  console.warn('lengthHashTable', lengthHashTable)
  console.warn('lengthHashTable[maxLength]', lengthHashTable[maxLength])
  return lengthHashTable[maxLength]
};

// 输入：n = 13
// 输出：4
// 解释：总共有 9 个组，将 1 到 13 按数位求和后这些组分别是：
// [1,10]，[2,11]，[3,12]，[4,13]，[5]，[6]，[7]，[8]，[9]。总共有 4 个组拥有的数字并列最多。
countLargestGroup(13)
countLargestGroup(24)