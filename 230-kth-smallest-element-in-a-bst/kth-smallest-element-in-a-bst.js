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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = 0;
    let ans = null;
    let inorder = function (root) {
        if (root === null || ans !== null) return;
        inorder(root.left);
        count++;
        if (count === k) {
            ans = root.val;
            return;
        }
        inorder(root.right);
    };
    inorder(root);
    return ans;
};