/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

  const charsHashTable = {}
  for (let j = 0; j < chars.length; ++j) {
    if (charsHashTable[chars[j]] === undefined) {
      charsHashTable[chars[j]] = 1
    } else {
      ++charsHashTable[chars[j]]
    }
  }
  function canBeFormed (word) {
    const wordHashTable = {}
    for (let i = 0; i < word.length; ++i) {
      if (wordHashTable[word[i]] === undefined) {
        wordHashTable[word[i]] = 1
      } else {
        ++wordHashTable[word[i]]
      }
    }
    for (let key in wordHashTable) {
      if (charsHashTable[key] === undefined || wordHashTable[key] > charsHashTable[key]) {
        return false
      }
    }
    return true
  }
  let res = 0
  for (let i = 0; i < words.length; ++i) {
    if (canBeFormed(words[i])) {
      res += words[i].length
    }
  }
  return res
};