/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const reg = new RegExp(`^${searchWord}`)
  const arr = sentence.split(' ')
  for (let i = 0; i < arr.length; ++i) {
    if (reg.test(arr[i])) {
      return i
    }
  }
  return -1
};