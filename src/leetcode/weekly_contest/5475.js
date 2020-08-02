/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  function get3 (arr) {
    const res = []
    for (let i = 0; i < arr.length - 2; ++i) {
      for (let j = i + 1; j < arr.length - 1; ++j) {
        for (let k = j + 1; k < arr.length; ++k) {
          res.push([arr[i], arr[j], arr[k]])
        }
      }
    }
    return res
  }
  function isGood3 (arr, a, b, c) {
    return (Math.abs(arr[0] - arr[1]) <= a) && (Math.abs(arr[1] - arr[2]) <= b) && (Math.abs(arr[0] - arr[2]) <= c)
  }
  let res = 0
  get3(arr).forEach(item => {
    if (isGood3(item, a, b, c)) {
      ++res
    }
  })
  return res
};

countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)