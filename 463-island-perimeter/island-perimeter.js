/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let count = 0;
  let dfs = function (i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      count++; //if out of bounds means water, so increase count..
      return;
    }
    if (grid[i][j] === 2) return; //if already visited, just return..
    if (grid[i][j] === 0) {
      //if cell is 0(water) then increase perimeter count..
      count++;
      return;
    }
    if (grid[i][j] === 1) {
      //if we are at land first check if is visited then check adjacent sides...
      grid[i][j] = 2;
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    //Use nested for loops to find the first cell where grid[i][j] === 1...Call dfs(i, j).
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        return count;//Once you trigger dfs(i, j) inside your nested loops on the first land cell (1), the entire island gets traversed and updated to 2..to save runtime, you can immediately return count..
      }
    }
  }
};
