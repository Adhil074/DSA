/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let q = [];
    let freshoranges = 0;
    let mins = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                freshoranges++;
            }
            if (grid[i][j] == 2) {
                q.push([i, j]);
            }
        }
    }
    while (q.length > 0 && freshoranges > 0) {
        let n = q.length;
        while (n--) {
            let node = q.shift();
            let i = node[0];
            let j = node[1];
            //go up
            if (i - 1 >= 0 && grid[i - 1][j] == 1) {
                grid[i - 1][j] = 2;
                q.push([i - 1, j]);
                freshoranges--;
            }
            //go down
            if (i + 1 < grid.length && grid[i + 1][j] == 1) {
                grid[i + 1][j] = 2;
                q.push([i + 1, j]);
                freshoranges--;
            }
            //go left
            if (j - 1 >= 0 && grid[i][j - 1] == 1) {
                grid[i][j - 1] = 2;
                q.push([i, j - 1]);
                freshoranges--;
            }
            //go right
            if (j + 1 < grid[0].length && grid[i][j + 1] == 1) {
                grid[i][j + 1] = 2;
                q.push([i, j + 1]);
                freshoranges--;
            }
        }
        mins++;
    }
    if (freshoranges !== 0) return -1;
    return mins;
};