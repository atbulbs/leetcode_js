/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function(words, s) {
  let leftPointer = words[0]
  let rightPointer = words[words.length - 1]
  while (leftPointer === '') {
    leftPointer++
  }
  while (rightPointer === '' && rightPointer > leftPointer) {
    rightPointer--
  }


};