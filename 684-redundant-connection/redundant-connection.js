/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    let n = edges.length;
    let size = new Array(n + 1).fill(1);
    let parent = [];
    for (let i = 0; i <= n; i++) {
        parent.push(i);
    }
    function up(node) {
        if (parent[node] === node) return node;
        parent[node] = up(parent[node]);
        return parent[node];
    }
    function union(u, v) {
        let pu = up(u);
        let pv = up(v);
        if (pu === pv) return false;
        if (size[pu] < size[pv]) {
            parent[pu] = pv;
            size[pv] += size[pu];
        } else {
            parent[pv] = pu;
            size[pu] += size[pv];
        }
        return true;
    }
    for (let [u, v] of edges) {
        if (union(u, v) === false) {
            //if both nodes coonected already union func will return false ..
            return [u, v];
        }
    }
};