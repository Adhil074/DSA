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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null) return null;
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    if (key === root.val) {
        if (root.left === null && root.right === null) {
            return null;
        } else if (root.right === null) {
            return root.left;
        } else if (root.left === null) {
            return root.right;
        } else {
            let successor = root.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
            root.val = successor.val;//replace deletable value with successor value..
            root.right = deleteNode(root.right, successor.val);//then go right subtree and delete that replaced deletable value.
        }
    }
    return root;
};
