/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  for (let i = 0; i < k; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr.slice(0, k)
};