/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
  if (N <= 2) {
    return 2
  } else {
    function isPrime (n) {
      let i = 2
      while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
          return false
        }
        i++
      }
      return true
    }
    function isPalindrome (n) {
      if (n < 10) {
        return true
      } else if (n % 10 === 0) {
        return false
      } else {
        let reverse = 0
        while (n > reverse) {
          reverse = reverse * 10 + n % 10
          n = Math.floor(n / 10)
        }
        return (n === reverse) || (n === Math.floor(reverse / 10))
      }
    }
    while (!(isPalindrome(N) && isPrime(N))) {
      N++
      if (N > 10000000 && N < 100000000) {
        N = 100000000
      }
    }
    return N
  }
};

console.warn('primePalindrome(8)', primePalindrome(8))