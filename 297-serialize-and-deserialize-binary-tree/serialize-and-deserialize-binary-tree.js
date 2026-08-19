/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let arr = [];

    function dfs(node) {
        if (node === null) {
            arr.push("null");
            return; // CRITICAL FIX: Stop recursion when node is null
        }

        arr.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let vals = data.split(",");
    let idx = 0;

    function buildTree() {
        let val = vals[idx];
        idx = idx + 1;

        if (val === "null") return null;

        let node = new TreeNode(Number(val));
        node.left = buildTree();
        node.right = buildTree();

        return node;
    }

    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */