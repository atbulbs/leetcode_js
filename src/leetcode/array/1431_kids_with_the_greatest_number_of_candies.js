/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const res = []
  const max = Math.max(...candies)
  candies.forEach(num => {
    if (num + extraCandies >= max) {
      res.push(true)
    } else {
      res.push(false)
    }
  })
  return res
};