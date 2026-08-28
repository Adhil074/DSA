/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    for (let [u, v] of prerequisites) adj[v].push(u);
    let visited = new Array(numCourses).fill(false);
    let pathVisited = new Array(numCourses).fill(false);
    function dfs(node) {//node: Tells DFS which specific course it is currently inspecting and checking for cycles.
        // 1. Cycle found -> return true
        if (pathVisited[node] === true) return true;
        // 2. Already processed and safe -> return false
        if (visited[node] === true) return false;
        pathVisited[node] = true;
        visited[node] = true;
        for (let neighbor of adj[node]) {
            if (dfs(neighbor) === true) return true; // Found a cycle! Stop and return true immediately.
        }
        // Only AFTER checking ALL neighbors safely, backtrack and return false
        pathVisited[node] = false;
        return false; // No cycle found in any branch
    }
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i) === true) return false; // Cycle found! Impossible to finish.
    }
    return true; // Checked all courses without any cycles!
};