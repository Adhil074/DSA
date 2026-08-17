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
var maxPathSum = function (root) {
    let maxsum = -Infinity;
    let solve = function (root) {
        if (root === null) return 0;
        let l = solve(root.left);
        let r = solve(root.right);
        let b = l + r + root.val;
        let a = Math.max(l, r) + root.val;
        let n = root.val;
        maxsum = Math.max(maxsum, b, a, n);
        return Math.max(a, n);
    };
    solve(root);
    return maxsum;
};