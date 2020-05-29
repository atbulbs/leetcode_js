/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function (root) {
  const routes = []
  function traversal (routes, root) {
    if (root) {
      routes.push(root)
      if (root.left) {
        routes.push(root.left)
      }
      if (root.right) {
        routes.push(root.right)
      }
    }
  }
};