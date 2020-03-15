/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const memory = {}
  for (let i = 0; i < s.length; i++) {
    const curStr = s[i]
    if (memory[curStr] === undefined) {
      memory[curStr] = 1
    } else if (memory[curStr]) {
      memory[curStr]++
    }
  }
  for (let j = 0; j < s.length; j++) {
    const curStr = s[j]
    if (memory[curStr] === 1) {
      return j
    }
  }
  return -1
};