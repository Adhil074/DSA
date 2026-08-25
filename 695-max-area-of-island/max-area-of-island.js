/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let maxArea = 0;
    function helper(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return 0;
        if (grid[i][j] === 0) return 0;
        if (grid[i][j] === 2) return 0;
        grid[i][j] = 2;
        return (
            1 +
            helper(i + 1, j) +
            helper(i, j + 1) +
            helper(i - 1, j) +
            helper(i, j - 1)
        );
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, helper(i, j));//the moment we find valid cell update answer by triggering helper function..
            }
        }
    }
    return maxArea;
};