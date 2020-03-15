/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  const res = new Array(num_people).fill(0)
  let index = 0
  let n = 1
  let left = candies
  while (left >= n) {
    index === num_people && (index = 0)
    res[index] += n
    index++
    left -= n
    n++
  }
  if (left > 0) {
    index === num_people && (index = 0)
    res[index] += left
  }
  return res
};