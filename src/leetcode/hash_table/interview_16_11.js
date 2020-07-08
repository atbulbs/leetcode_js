/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (k === 0) {
    return []
  } else {
    const hash = {}
    for (let i = 0; i <= k; ++i) {
      // i个shorter
      const iShoterLength = i * shorter + (k - i) * longer
      if (!hash[iShoterLength]) {
        hash[iShoterLength] = 1
      }
    }
    return Object.keys(hash).map(item => Number(item)).sort((a, b) => a - b)
  }
};


console.warn(divingBoard(2, 1118596, 979))
console.warn(divingBoard(1, 2, 3))