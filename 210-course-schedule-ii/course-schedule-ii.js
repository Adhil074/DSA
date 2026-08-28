/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    for (let [u, v] of prerequisites) adj[v].push(u);

    let visited = new Array(numCourses).fill(false);
    let pathVisited = new Array(numCourses).fill(false);
    let res = []; // 1. Added result array

    function dfs(node) {
        if (pathVisited[node] === true) return true;  // Cycle found
        if (visited[node] === true) return false;    // Already safe

        pathVisited[node] = true;
        visited[node] = true;

        for (let neighbor of adj[node]) {
            if (dfs(neighbor) === true) return true;
        }

        pathVisited[node] = false;
        res.push(node); // 2. Push node AFTER processing all neighbors safely
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (dfs(i) === true) return []; // Cycle detected -> return empty array
    }

    return res.reverse(); // 3. Reverse to get correct prerequisite order
};