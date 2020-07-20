// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const hash = {}
  numbers.forEach(num => {
    hash[num] = target - num
  })
  let targetIndex
  let targetPair
  for (let i = 0; i < numbers.length; ++i) {
    const num = numbers[i]
    if (hash[hash[num]] !== undefined) {
      console.warn('num', num)
      targetIndex = i
      targetPair = hash[num]
      console.warn('targetPair', targetPair)
      break
    }
  }
  for (let j = 0; j < numbers.length; ++j) {
    if (targetIndex !== j && numbers[j] === targetPair) {
      console.warn('j', j)
      if (j > targetIndex) {
        return [targetIndex + 1, j + 1]
      } else {
        return [j + 1, targetIndex + 1]
      }
    }
  }
};

function twoSum (numbers, target) {
  let leftPointer = 0
  let rightPointer = numbers.length - 1
  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer]
    if (sum === target) {
      return [leftPointer + 1, rightPointer + 1]
    } else if (sum < target) {
      ++leftPointer
    } else {
      --rightPointer
    }
  }
  return [-1, -1]

}

twoSum([2,7,11,15], 9)