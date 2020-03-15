/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  const res = []
  if (n & 1 === 1) {
      res.push(0)
  }
  for (let i = 1; i <= n / 2; i++) {
      res.push(i)
      res.push(-i)
  }
  return res
};