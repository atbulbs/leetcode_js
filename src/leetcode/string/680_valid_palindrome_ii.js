/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let headPointer = 0
  let tailPointer = s.length - 1
  function isPalindrome (s) {
    let headPointer = 0
    let tailPointer = s.length - 1
    while (headPointer < tailPointer) {
      if (s[headPointer] !== s[tailPointer]) {
        return false
      } else {
        headPointer++
        tailPointer--
      }
    }
    return true
  }
  while (headPointer < tailPointer) {
    if (s[headPointer] !== s[tailPointer]) {
      if (s[headPointer + 1] === s[tailPointer] || s[headPointer] === s[tailPointer - 1]) {
        return isPalindrome(s.substring(headPointer + 1, tailPointer + 1)) || isPalindrome(s.substring(headPointer, tailPointer))
      } else {
        return false
      }
    } else {
      headPointer++
      tailPointer--
    }
  }
  return true
};

var validPalindrome = function(s) {
  let headPointer = 0
  let tailPointer = s.length - 1
  function isPalindrome (s, headPointer, tailPointer) {
    while (headPointer < tailPointer) {
      if (s[headPointer] !== s[tailPointer]) {
        return false
      } else {
        headPointer++
        tailPointer--
      }
    }
    return true
  }
  while (headPointer < tailPointer) {
    if (s[headPointer] !== s[tailPointer]) {
      if (s[headPointer + 1] === s[tailPointer] || s[headPointer] === s[tailPointer - 1]) {
        return isPalindrome(s, headPointer + 1, tailPointer) || isPalindrome(s, headPointer, tailPointer - 1)
      } else {
        return false
      }
    } else {
      headPointer++
      tailPointer--
    }
  }
  return true
};

console.warn('aba', validPalindrome('aba'))
console.warn('abc', validPalindrome('abc'))
