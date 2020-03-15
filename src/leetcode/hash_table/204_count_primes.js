/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const arr = new Array(n).fill(true)
  function isPrime (n) {
    if (n === 0 || n === 1) {
      return false
    }
    if (n === 2 || n === 3) {
      return true
    }
    const mid = Math.sqrt(n)
    for (let i = 2; i < mid; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  for (let j = 0; j < n; j++) {
    if (isPrime(j)) {
      for (let k = j * j; k < n; k += j) {
        arr[k] = false
      }
    }
  }
  let count = 0
  for (let l = arr.length; l > 1; l--) {
    arr[l] && count++
  }
  return count
};

var countPrimes = function (n) {
  let count = 0
  function isPrime (n) {
    if (n === 0 || n === 1) {
      return false
    }
    if (n === 2 || n === 3) {
      return true
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
  for (let j = 2; j < n; j++) {
    if (isPrime(j)) {
      count++
    }
  }
  return count
}