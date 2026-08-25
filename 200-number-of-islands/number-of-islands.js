/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    const dfs = function (i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
        if (grid[i][j] === "0") return;
        if (grid[i][j] === "2") return;
        grid[i][j] = "2";//first mark as visited then call recursion on neighbors...
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1") {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};