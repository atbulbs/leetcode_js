/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  function isPalindrome (s) {
    if (s.length <= 1) {
      return true
    } else {
      let leftPointer = 0
      let rightPointer = s.length - 1
      while (leftPointer <= rightPointer) {
        if (s[leftPointer++] !== s[rightPointer--]) {
          return false
        }
      }
      return true
    }
  }

  if (s.length <= 1) {
    return true
  } else {
    let leftPointer = 0
    let rightPointer = s.length - 1
    while (leftPointer <= rightPointer) {
      if (s[leftPointer] !== s[rightPointer]) {
        const removeLeftStr = s.substring(leftPointer + 1, rightPointer + 1)
        const removeRightStr = s.substring(leftPointer, rightPointer)
        console.warn('removeLeftStr', removeLeftStr)
        console.warn('removeRightStr', removeRightStr)
        return isPalindrome(removeLeftStr) || isPalindrome(removeRightStr)
      }
      leftPointer++
      rightPointer--
    }
    return true
  }
};

console.warn(validPalindrome('abc'))
