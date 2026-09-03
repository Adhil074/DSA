/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => new Array(n).fill(-1));
    dp[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j == 0) continue;//Skip the Start Cell: Since dp[0][0] = 1 is already set.
            let top = i > 0 ? dp[i - 1][j] : 0//if i = 0, you are on the very top row..there is no row above you, so 0 paths can come from above..
            let left = j > 0 ? dp[i][j - 1] : 0;
            dp[i][j] = top + left;
        }
    }
    return dp[m - 1][n - 1];//return the bottom-right cell(destination)..
};