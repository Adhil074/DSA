/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let root1 = p;
  let root2 = q;
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;
return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
};
