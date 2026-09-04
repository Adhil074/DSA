/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    // STEP 1: Just create ONE row instead of a 2D matrix
    let prev = new Array(n).fill(0);

    if (obstacleGrid[0][0] === 0) {
        prev[0] = 1;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                prev[j] = 0; // CRITICAL: If it's an obstacle, 0 ways to reach it. We must clear the old row's value!
                continue;
            }
            if (i === 0 && j === 0) continue;

            // STEP 2: 'top' comes from the exact same index in our 1D array (the old value from previous row)
            let top = 0;
            if (i > 0) {
                top = prev[j];
            }

            // STEP 3: 'left' comes from the index right behind us (already updated for this row)
            let left = 0;
            if (j > 0) {
                left = prev[j - 1];
            }

            prev[j] = top + left;
        }
    }

    // The last element of our single row holds the final answer
    return prev[n - 1];
};
