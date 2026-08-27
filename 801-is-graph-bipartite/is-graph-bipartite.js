/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let n = graph.length;
    let visited = new Array(n).fill(-1);

    function dfs(node, color) {
        visited[node] = color;

        for (let neighbor of graph[node]) {
            if (visited[neighbor] === -1) {

                if (dfs(neighbor, 1 - color) === false) {
                    return false;
                }
            } else if (visited[node] === visited[neighbor]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (visited[i] === -1) {
            if (dfs(i, 0) === false) {
                return false;
            }
        }
    }
    return true;
};