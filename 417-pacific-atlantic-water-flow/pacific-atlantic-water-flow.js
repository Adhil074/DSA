/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let res = [];
    let m = heights.length;
    let n = heights[0].length;
    let pacificVisited = Array.from({ length: m }, () =>
        new Array(n).fill(false),
    );
    let atlanticVisited = Array.from({ length: m }, () =>
        new Array(n).fill(false),
    );
    function dfs(i, j, prevHeight, visited) {
        //here i=row, j=col,prevHeight=border cells hight, visited=combination of atlantic and pacific matrix..
        if (i < 0 || j < 0 || i >= m || j >= n) return; //out of bounds
        if (visited[i][j] === true) return; //if cell already visited just return
        if (heights[i][j] < prevHeight) return; //if curr cell less than border no flow occurs..
        visited[i][j] = true; //first mark as visited;
        dfs(i - 1, j, heights[i][j], visited); // Up
        dfs(i + 1, j, heights[i][j], visited); // Down
        dfs(i, j - 1, heights[i][j], visited); // Left
        dfs(i, j + 1, heights[i][j], visited); // Right
    }
    // Top row
    for (let j = 0; j < n; j++) {
        dfs(0, j, heights[0][j], pacificVisited);
    }
    // Bottom row
    for (let j = 0; j < n; j++) {
        dfs(m - 1, j, heights[m - 1][j], atlanticVisited);
    }
    // Left col
    for (let i = 0; i < m; i++) {
        dfs(i, 0, heights[i][0], pacificVisited);
    }
    // Right col
    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, heights[i][n - 1], atlanticVisited);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificVisited[i][j] === true && atlanticVisited[i][j] === true) {
                res.push([i, j]);
            }
        }
    }
    return res;
};