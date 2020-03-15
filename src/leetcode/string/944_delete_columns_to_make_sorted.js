/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const row = A.length
  const column = A[0].length
  let res = 0
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row - 1; j++) {
      if (A[j][i].charCodeAt() > A[j + 1][i].charCodeAt()) {
        res++
        break
      }
    }
  }
  return res
};