/**
 * @param {string} s
 * @return {string}
 */
// 倒序遍历
var freqAlphabets = function(s) {
  let res = ''
  const hashTable = {}
  const a_code = 'a'.charCodeAt()
  for (let i = 0; i < 26; i++) {
    const str = String.fromCharCode(a_code + i)
    if (i < 9) {
      hashTable[i + 1] = str
    } else {
      hashTable[(i + 1) + '#'] = str
    }
  }
  // console.warn('hashTable', hashTable)
  let i = s.length - 1
  while (i >= 0) {
    if (s[i] === '#') {
      res = hashTable[s.substring(i - 2, i + 1)] + res
      console.warn('res', res)
      i -= 3
    } else {
      res = hashTable[s[i]] + res
      // console.warn('res', res)
      i--
    }
  }
  return res
};

var s = "10#11#12"
freqAlphabets(s)