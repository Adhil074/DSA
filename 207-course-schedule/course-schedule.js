/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adj = Array.from({ length: numCourses }, () => []);
    let indegree = new Array(numCourses).fill(0);
    for (let [u, v] of prerequisites) {
        adj[v].push(u);
        indegree[u]++;
    }
    let q = [];
    let res = [];
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    while (q.length > 0) {
        let node = q.shift();
        res.push(node);
        for (let neighbor of adj[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) q.push(neighbor);
        }
    }
    if (res.length === numCourses) return true;
    return false;
};