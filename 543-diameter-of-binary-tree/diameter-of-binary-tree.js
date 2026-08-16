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
var diameterOfBinaryTree = function(root) {
    let dia = 0;
    let getHeight = function(root) {
        if (root === null) return 0; 
        let leftH = getHeight(root.left);   
        let rightH = getHeight(root.right); 
        dia = Math.max(dia, leftH + rightH);
        return 1 + Math.max(leftH, rightH);
    };
    getHeight(root); 
    return dia;
}