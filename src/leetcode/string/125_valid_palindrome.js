/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0 || s.length === 1) {
    return true
  } else {
    function isLetterOrNum (str) {
      const num = str.charCodeAt()
      return (num >= 'A'.charCodeAt() && num <= 'Z'.charCodeAt()) || (num >= 'a'.charCodeAt() && num <= 'z'.charCodeAt()) || (num >= '0'.charCodeAt() && num <= '9'.charCodeAt())
    }
    const arr = s.split('').filter(isLetterOrNum)
    return arr.join().toLocaleLowerCase() === arr.join().reverse().toLocaleLowerCase()
  }
};

isPalindrome("A man, a plan, a canal: Panama")