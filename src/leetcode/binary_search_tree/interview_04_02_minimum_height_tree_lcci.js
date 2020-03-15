/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length > 0) {
    const middleNode = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[middleNode])
    const leftNums = nums.slice(0, middleNode)
    const rightNums = nums.slice(middleNode + 1)
    root.left = sortedArrayToBST(leftNums)
    root.right = sortedArrayToBST(rightNums)
    return root
  } else {
    return null
  }
};
