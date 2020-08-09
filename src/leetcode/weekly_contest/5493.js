/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  let flag = true
  while (s.length && flag) {
    flag = false
    for (let i = 0; i <= s.length - 2; i++) {
      if (Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt()) === 32) {
        s = s.substring(0, i) + s.substring(i + 2, s.length)
        flag = true
      }
    }
  }
  return s
};

console.warn(makeGood('leEeetcode'))
console.warn(makeGood('abBAcC'))