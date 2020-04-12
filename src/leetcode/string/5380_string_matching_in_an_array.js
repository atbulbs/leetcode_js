/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  const hashTable = {}
  for (let i = 0; i < words.length; ++i) {
    for (let j = 0; j < words.length; ++j) {
      if (i !== j && new RegExp(words[i]).test(words[j])) {
        hashTable[words[i]] = 1
      }
    }
  }
  return Object.keys(hashTable)
};

console.warn(stringMatching(["mass","as","hero","superhero"]))
console.warn(stringMatching(["leetcode","et","code"]))
console.warn(stringMatching(["blue","green","bu"]))
console.warn(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))