/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let flag = true
  function getDepth (root) {
    if (flag === false || root === null) {
      return 0
    } else {
      let leftDepth = getDepth(root.left)
      let rightDepth = getDepth(root.right)
      if (Math.abs(leftDepth - rightDepth) > 1) {
        flag = false
      }
      return Math.max(leftDepth, rightDepth) + 1
    }
  }
  getDepth(root)
  return flag
};