/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  if (root === null || root.left === null) {
    return -1
  }
  let left = root.left.val
  let right = root.right.val
  if (left === root.val) {
    left = findSecondMinimumValue(root.left)
  }
  if (right === root.val) {
    right = findSecondMinimumValue(root.right)
  }
  if (left !== -1 && right !== -1) {
    return Math.min(left, right)
  }
  if (left !== -1) {
    return left
  }
  return right
};

var findSecondMinimumValue = function(root) {
  let arr = []
  ;(function traversal (root) {
    if (root !== null) {
      traversal(root.left)
      arr.push(root.val)
      traversal(root.right)
    }
  })(root)
  let _arr = [...new Set(arr)].sort()
  return _arr[1] ? _arr[1] : -1
};