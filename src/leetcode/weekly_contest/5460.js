/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const hash = {}
  nums.forEach(item => {
    if (hash[item] === undefined) {
      hash[item] = 1
    } else {
      hash[item]++
    }
  })
  let res = 0
  function helper (val) {
    // 1 0
    // 2 1
    // 3 2 + 1
    // 4 3 + 2 + 1
    // 5 4 + 3 + 2 + 1

    return (1 + val - 1) * (val - 1) / 2
  }
  for (let val of hash) {
    res += helper(val)
  }
  return res
};

