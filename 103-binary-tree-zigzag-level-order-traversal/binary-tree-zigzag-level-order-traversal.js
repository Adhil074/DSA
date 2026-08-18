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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return [];
    let ans = [];
    let q = [];
    q.push(root);
    let isLefttoRight = true;
    while (q.length > 0) {
        let size = q.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            if (isLefttoRight === true) {
                level[i] = node.val;
            } else {
                level[size - 1 - i] = node.val;
            }
            if (node.left !== null) {
                q.push(node.left)
            }
            if (node.right !== null) {
                q.push(node.right)
            }
        }
        isLefttoRight = !isLefttoRight;
        ans.push(level)
    }
    return ans;
}
