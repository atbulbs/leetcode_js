/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const arr = salary.sort((a, b) => a - b)
  console.warn('arr', arr)
  let sum = 0
  const len = arr.length
  for (let i = 1; i < len - 1; ++i) {
    sum += arr[i]
  }
  return sum / (len - 2)
};

console.warn(average([4000,3000,1000,2000]))