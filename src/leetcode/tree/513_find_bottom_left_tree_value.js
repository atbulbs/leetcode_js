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
var findBottomLeftValue = function(root) {
  const res = []
  ;(function (root, depth) {
    if (root !== null) {
      if (res[depth] === undefined) {
        res[depth] = []
      }
      res[depth].push(root)
      arguments.callee(root.left, depth + 1)
      arguments.callee(root.right, depth + 1)
    }
  })(root, 0)
  return res[res.length - 1][0]
};

