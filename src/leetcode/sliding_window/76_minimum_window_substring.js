/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) {
    return ''
  } else {
    let leftPointer = 0
    let rightPointer = 0
    let res = s
    let existFlag = false
    const targetHashTable = {}
    const windowHashTable = {}
    // 生成目标哈希表
    for (let i = t.length - 1; i >= 0; i--) {
      if (targetHashTable[t[i]] === undefined) {
        targetHashTable[t[i]] = 1
      } else {
        targetHashTable[t[i]]++
      }
    }
    // 是否符合要求
    function isFit (windowHashTable, targetHashTable) {
      for (let str in targetHashTable) {
        if (windowHashTable[str] === undefined) {
          return false
        } else {
          if (windowHashTable[str] < targetHashTable[str]) {
            return false
          }
        }
      }
      existFlag = true
      return true
    }
    while (rightPointer < s.length) {
      // 向右移动右指针, 并在窗口哈希表记录每个字符出现的次数
      const currentStr = s[rightPointer]
      if (windowHashTable[currentStr] === undefined) {
        windowHashTable[currentStr] = 1
      } else {
        windowHashTable[currentStr]++
      }
      rightPointer++
      // 向右移动左指针, 缩小窗口, 直至不符合要求
      while (isFit(windowHashTable, targetHashTable)) {
        // 更新结果
        const _res = s.substring(leftPointer, rightPointer)
        if (_res.length < res.length) {
          res = _res
        }
        const currentStr = s[leftPointer]
        windowHashTable[currentStr]--
        leftPointer++
      }
    }
    return existFlag ? res : ''
  }
};

// var s = 'ADOBECODEBANC'
// var t = 'ABC'

// minWindow(s, t)
