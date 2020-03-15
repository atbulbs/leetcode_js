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
var diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0
  } else if (root.left === null && root.right === null) {
    return 0
  } else {
    function getMaxDepth (root) {
      let res = 0
      function traversal (root, depth) {
        if (root !== null) {
          if (depth > res) {
            res = depth
          }
          if (root.left) {
            traversal(root.left, depth + 1)
          }
          if (root.right) {
            traversal(root.right, depth + 1)
          }
        }
      }
      traversal(root, 1)
      return res
    }
    if (root.left !== null && root.right === null) {
      return getMaxDepth(root.left)
    } else if (root.right !== null && root.left === null) {
      return getMaxDepth(root.right)
    } else {
      return getMaxDepth(root.left) + getMaxDepth(root.right) - 2
    }
  }
};
// un
var diameterOfBinaryTree = function(root) {
  let res = 0
  function traversal (root) {
    if (root === null) {
      return 0
    } else {
      const leftDiameter = traversal(root.left)
      const rightDiameter = traversal(root.right)
      res = Math.max(res, leftDiameter + rightDiameter)
      return Math.max(leftDiameter, rightDiameter) + 1
    }
  }
  traversal(root)
  return res
}