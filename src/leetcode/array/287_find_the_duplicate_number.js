/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slowPointer = 0
  let fastPointer = 0
  while (true) {
    slowPointer = nums[slowPointer]
    fastPointer = nums[nums[fastPointer]]
    console.warn('slowPointer -> ' + slowPointer)
    console.warn('fastPointer -> ' + fastPointer + '\n')
    if (slowPointer == fastPointer) {
      let _slowPointer = 0
      while (nums[_slowPointer] !== nums[slowPointer]) {
        slowPointer = nums[slowPointer]
        _slowPointer = nums[_slowPointer]
      }
      console.warn('入环节点的索引:', nums[_slowPointer])
      console.warn('入环节点的值:', nums[nums[_slowPointer]])
      return nums[_slowPointer]
    }
  }
};

findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 5])