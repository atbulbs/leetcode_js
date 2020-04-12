/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  const res = []
  const p = []
  for (let i = 1; i <= m; ++i) {
    p.push(i)
  }
  for (let i = 0; i < queries.length; ++i) {
    const el = queries[i]
    for (let j = 0; j < p.length; ++j) {
      if (el === p[j]) {
        res.push(j)
        p.splice(j, 1)
        p.unshift(el)
        break
      }
    }
  }
  return res
};

console.warn(processQueries([3,1,2,1], 5))
console.warn(processQueries([4,1,2,2], 4))
console.warn(processQueries([7,5,5,8,3], 8))