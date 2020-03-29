/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  if (rating.length < 3) {
    return 0
  }
  let res = 0
  function is3ElAscendentOrDescendent (arr) {
    if ((arr[0] > arr[1]) && (arr[1] > arr[2])) {
      return true
    } else if ((arr[0] < arr[1]) && (arr[1] < arr[2])) {
      return true
    } else {
      return false
    }
  }
  function pick3 (arr) {
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
  const arr = pick3(rating)
  arr.forEach(item => {
    if (is3ElAscendentOrDescendent(item)) {
      ++res
    }
  })
  return res
};

console.warn(numTeams([2,5,3,4,1]))
console.warn(numTeams([2,1,3]))
console.warn(numTeams([1,2,3,4]))