/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
  if (root === null) {
    return null
  } else {
    let arr = []
    function traversal (root) {
      if (root !== null) {
        traversal(root.left)
        arr.push(root)
        traversal(root.right)
      }
    }
    traversal(root)
    for (let i = 0; i < arr.length - 1; ++i) {
      arr[i].left = null
      arr[i].right = arr[i + 1]
    }
    return arr[0]
  }
};

var convertBiNode = function(root) {
  let arr = []
  let stack = [root]
  while (stack.length) {
    const cur = stack.pop()

    arr.push(cur)
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
  for (let i = 0; i < arr.length - 1; ++i) {
    arr[i].left = null
    arr[i].right = arr[i + 1]
  }
  return arr[0]
}