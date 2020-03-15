/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []
  ;(function (root, depth) {
    if (res[depth] === undefined) {
      res[depth] = []
    }
    res[depth].push(root)
    root.children.forEach(child => {
      arguments.callee(child, depth + 1)
    })
  })(root, 0)
  return res
};