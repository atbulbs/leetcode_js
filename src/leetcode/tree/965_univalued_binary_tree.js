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
var isUnivalTree = function(root) {
  if (root === null) {
    return false
  } else {
    const value = root.val
    function trversal (root) {
      if (root !== null) {
        return root.val === value && trversal(root.left) && trversal(root.right)
      } else {
        return true
      }
    }
    return trversal(root)
  }
};