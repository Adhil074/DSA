/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({ length: m }, () => new Array(n).fill(0));
    // Initialize start cell only if it's not an obstacle
    if (obstacleGrid[0][0] === 0) {
        dp[0][0] = 1;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            if (i === 0 && j === 0) continue; //since first cell is visited above->dp[0][0]=1..
            let top = 0; //now we need to go in top and left directions , so we need to check if top and left are valid cells or not, before going...after checking only we go in that directions...for that first we initialize top and left with 0 then update them after checking...
            if (i > 0) {
                top = dp[i - 1][j];
            }
            let left = 0;
            if (j > 0) {
                left = dp[i][j - 1];
            }
            dp[i][j] = top + left; //after checking put that count in array...
        }
    }
    return dp[m - 1][n - 1]; //starting cell
};