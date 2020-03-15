/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let av = root.val
  let pv = p.val
  let qv = q.val
  if (pv > av && qv > av) {
      return lowestCommonAncestor(root.right, p, q)
  } else if (pv < av && qv < av) {
      return lowestCommonAncestor(root.left, p, q)
  } else {
      return root
  }
}

var lowestCommonAncestor = function(root, p, q) {
  let aNode = root
  let pv = p.val
  let qv = q.val
  while (aNode) {
      const av = aNode.val
      if (pv > av && qv > av) {
          aNode = aNode.right
      } else if (pv < av && qv < av) {
          aNode = aNode.left
      } else {
          return aNode
      }
  }
  return null
}