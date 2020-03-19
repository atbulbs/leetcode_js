/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hashTable = {}
  let result = 0
  for(let i = s.length - 1; i >= 0; --i) {
    if (hashTable[s[i]] === undefined) {
      hashTable[s[i]] = 1
    } else {
      ++hashTable[s[i]]
    }
  }
  let flag = true
  for (let key in hashTable) {
    j = hashTable[key]
    // 偶数
    if ((j & 1) === 0) {
      result += j
    } else {
      // 奇数
      result += (j - 1)
      if (flag) {
        result++
        flag = false
      }
    }
  }
  return result
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const len = s.length
  const hashTable = {}
  let result = 0
  for(let i = len - 1; i >= 0; --i) {
    if (hashTable[s[i]] === undefined || hashTable[s[i]] === 0) {
      hashTable[s[i]] = 1
    } else {
      result += 2
      hashTable[s[i]] = 0
    }
  }
  return result < len ? result + 1 : result
};


var longestPalindrome = function(s) {
  const hashTable = {}
  let result = 0
  for(let i = s.length - 1; i >= 0; --i) {
    if (hashTable[s[i]] === undefined) {
      hashTable[s[i]] = 1
    } else {
      ++hashTable[s[i]]
    }
  }
  console.warn('hashTable', hashTable)
  let flag = true
  for (let key in hashTable) {
    j = hashTable[key]
    console.warn('key', key)
    console.warn('j', j)
    // 偶数
    if ((j & 1) === 0) {
      result += j
      console.warn('偶数', result)
    } else {
      // 奇数
      result += (j - 1)
      if (flag) {
        result++
        flag = false
      }
      console.warn('奇数', result)
    }
  }
  return result
};

var s = "adam"
console.warn(longestPalindrome(s))

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hashTable = {}
  for (let i = s.length; i > 0; --i) {
    if (hashTable[s[i]] === undefined) {
      hashTable[s[i]] = 1
    } else {
      ++hashTable[s[i]]
    }
  }
  const keyArr = Object.keys(hashTable)
  let res = 0
  let hasOdd = false
  keyArr.forEach(str => {
    const count = hashTable[str]
    // 偶数
    if ((count & 1) === 0) {
      res += count
    } else {
      hasOdd = true
      if (count > 1) {
        res += (count - 1)
      }
    }
  })
  return hasOdd ? ++res : res
};
