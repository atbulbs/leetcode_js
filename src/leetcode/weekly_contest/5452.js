/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  const _arr = arr.sort((a, b) => a - b)
  const delta = _arr[1] - _arr[0]
  for (let i = 2; i < _arr.length; ++i) {
    if (_arr[i] - _arr[i - 1] !== delta) {
      return false
    }
  }
  return true
};

console.log(canMakeArithmeticProgression([1, 3, 5, 7]))