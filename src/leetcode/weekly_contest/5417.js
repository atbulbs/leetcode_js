/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let res = 0
  const hash = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
  }
  let temp= 0
  let start = 0
  let end = k - 1
  for (let i = 0; i < k; ++i) {
    if (hash[s[i]]) {
      ++temp
    }
  }
  res = Math.max(res, temp)

  for (start = 1; start <= s.length - k; ++start) {
    if (hash[s[start - 1]]) {
      --temp
    }
    ++end
    if (hash[s[end]]) {
      ++temp
    }
    res = Math.max(res, temp)
  }

  return res
};

console.warn(maxVowels('abciiidef', 3))