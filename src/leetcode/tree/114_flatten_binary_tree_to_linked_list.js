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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const arr = []
  function traversal (node) {
    if (node) {
      arr.push(node)
      traversal(node.left)
      traversal(node.right)
    }
  }
  traversal(root)
  let cur = root
  for (let i = 0; i < arr.length - 1; ++i) {
    cur.right = arr[i + 1]
    cur.left = null
    cur = cur.right
  }
  return root
};