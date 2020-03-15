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
  if (nums.length) {
    let mid = Math.floor(nums.length / 2)
    let leftArr = nums.slice(0, mid)
    let rightArr = nums.slice(mid + 1, nums.length)
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(leftArr)
    root.right = sortedArrayToBST(rightArr)
    return root
  } else {
    return null
  }
};