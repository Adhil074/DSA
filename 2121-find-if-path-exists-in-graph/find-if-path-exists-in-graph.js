/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    let adj = [];
    for (let i = 0; i < n; i++) {
        adj.push([]);
    }
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        adj[u].push(v);
        adj[v].push(u);
    }
    let visited = [];
    for (let i = 0; i < n; i++) {
        visited.push(false);
    }
    let dfs = function (node) {
        if (node === destination) return true;
        visited[node] = true;
        let neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (visited[neighbor] === false) {
                if (dfs(neighbor) === true) {
                    return true;
                }
            }
        }
        return false;
    };
    return dfs(source);
};
