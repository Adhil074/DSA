/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preOrder, inOrder) {
    let preIndex = 0;
    let map = new Map();
    for (let i = 0; i < inOrder.length; i++) {
        map.set(inOrder[i], i);
    }
    let helper = function (inStart, inEnd) {
        if (inStart > inEnd) {
            return null;
        }
        let rootval = preOrder[preIndex];
        let root = new TreeNode(rootval);
        preIndex = preIndex + 1;
        let inIndex = map.get(rootval);
        root.left = helper(inStart, inIndex - 1);
        root.right = helper(inIndex + 1, inEnd);
        return root;
    };
    return helper(0, inOrder.length - 1);
};
