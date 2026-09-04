/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let prev = new Array(n).fill(Infinity);
    prev[0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            let top = Infinity;
            if (i > 0) {
                top = prev[j];
            }
            let left = Infinity;
            if (j > 0) {
                left = prev[j - 1];
            }
            prev[j] = grid[i][j] + Math.min(top, left);
        }
    }
    return prev[n - 1];//Return prev[n - 1]..prev is the entire 1D array. You need the single number stored at the very last index, which holds the minimum path sum to reach the bottom-right corner (m - 1, n -1)..
};