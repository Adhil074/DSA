/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let indegree = new Array(n + 1).fill(0);
    let outdegree = new Array(n + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        let u = trust[i][0];
        let v = trust[i][1];
        indegree[v]++;
        outdegree[u]++;
    }
    for (let i = 1; i <= n; i++) {
        if (indegree[i] === n - 1 && outdegree[i] === 0) {
            return i;
        }
    }
    return -1;
};