/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  return findPeakIndex(0, A.length - 1)
  function findPeakIndex (left, right) {
    let peakIndex = Math.ceil((right - left) / 2)
    if (A[peakIndex] > A[peakIndex + 1] && A[peakIndex] > A[peakIndex - 1]) {
      return peakIndex
    } else if (A[peakIndex] < A[peakIndex + 1]) {
      return findPeakIndex(peakIndex + 1, right)
    } else {
      return findPeakIndex(left, peakIndex - 1)
    }
  }
};

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    for (let i = A.length - 1; i >= 1; i--) {
      if (A[i] > A[i + 1] && A[i] > A[i - 1]) {
        return i
      }
    }
};