/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (node == null) return null;
    let seen = new Map();
    function dfs(node) {
        if (seen.has(node)) {
            return seen.get(node);
        }
        let clonenode = new Node(node.val);
        seen.set(node, clonenode);
        for (let i = 0; i < node.neighbors.length; i++) {
            let neighbor = node.neighbors[i];
            let clonedNeighbor = dfs(neighbor);
            clonenode.neighbors.push(clonedNeighbor);
        }
        return clonenode;
    }
    return dfs(node);
};
