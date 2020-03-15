/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n === 2) {
    return 1
  } else {
    const bulbsArr = new Array(n).fill(1)
    let res = n
    let i = 2
    while (i < n) {
      bulbsArr.forEach((item, index) => {
        if ((index + 1) % i === 0) {
          if (bulbsArr[index] === 1) {
            res--
            bulbsArr[index] = 0
          } else {
            res++
            bulbsArr[index] = 1
          }
        }
      })
      i++
    }
    if (bulbsArr[n - 1] === 1) {
      res--
      bulbsArr[n - 1] = 0
    } else {
      res++
      bulbsArr[n - 1] = 1
    }
    console.warn('bulbsArr', bulbsArr)
    return res
  }
};

var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n))
};

bulbSwitch(3)
