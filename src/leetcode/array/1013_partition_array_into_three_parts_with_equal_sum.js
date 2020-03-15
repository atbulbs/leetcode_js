/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = 0
  for (let i = 0; i < A.length; ++i) {
    sum += A[i]
  }
  if (sum % 3 === 0) {
    const tar = sum / 3
    let _sum = 0
    let count = 0
    for (let j = 0; j < A.length; ++j) {
      _sum += A[j]
      if (_sum === tar) {
        count++
        _sum = 0
      }
    }
    // console.warn('count', count)
    // console.warn('_sum', _sum)
    if (tar === 0) {
      return count >= 3 && _sum === 0
    } else {
      return count === 3 && _sum === 0
    }
  } else {
    return false
  }
};

var A = [0,2,1,-6,6,-7,9,1,2,0,1]

canThreePartsEqualSum(A)