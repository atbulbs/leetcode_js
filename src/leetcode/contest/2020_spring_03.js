/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
  const power = [0, 0, 0]
  let day = 0
  const res = new Array(requirements.length).fill(-1)
  const hash = {}
  requirements.forEach((item, index) => {
    hash[index] = item
  })
  while (day < increase.length) {
    power[0] += increase[day][0]
    power[1] += increase[day][1]
    power[2] += increase[day][2]
    for (let key in hash) {
      const item = hash[key]
      if (item[0] === 0 && item[1] === 0 && item[2] === 0) {
        res[key] = 0
        delete hash[key]
      }
      if (res[key] === -1 && power[0] >= item[0] && power[1] >= item[1] && power[2] >= item[2]) {
        res[key] = day + 1
        delete hash[key]
      }
    }
    ++day
  }
  return res
};

console.warn(getTriggerTime([[2,8,4],[2,5,0],[10,9,8]], [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]))
console.warn(getTriggerTime([[0,4,5],[4,8,8],[8,6,1],[10,10,0]], [[12,11,16],[20,2,6],[9,2,6],[10,18,3],[8,14,9]]))
console.warn(getTriggerTime([[1,1,1]], [[0,0,0]]))