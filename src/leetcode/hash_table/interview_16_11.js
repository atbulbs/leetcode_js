/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// k = 0
// shoter === longer
// shoter < longer
var divingBoard = function(shorter, longer, k) {
  if (k === 0) {
    return []
  } else {
    const hash = {}
    for (let i = 0; i <= k; ++i) {
      // i个longer
      const iShoterLength = i * longer + (k - i) * shorter
      if (!hash[iShoterLength]) {
        hash[iShoterLength] = 1
      }
    }
    return Object.keys(hash).map(item => Number(item))
  }
};


console.warn(divingBoard(2, 1118596, 979))
console.warn(divingBoard(1, 2, 3))