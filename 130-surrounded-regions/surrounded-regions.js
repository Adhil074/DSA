/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return;
        if (board[i][j] !== "O") return;
        board[i][j] = "V";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    //first row
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] == "O") {
            dfs(0, j);
        }
    }
    //last row
    for (let j = 0; j < board[0].length; j++) {
        if (board[board.length - 1][j] == "O") {
            dfs(board.length - 1, j);
        }
    }
    //first column
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] == "O") {
            dfs(i, 0);
        }
    }
    //last column
    for (let i = 0; i < board.length; i++) {
        if (board[i][board[0].length - 1] == "O") {
            dfs(i, board[0].length - 1);
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == "O") {
                board[i][j] = "X";
            } else if (board[i][j] == "V") {
                board[i][j] = "O";
            }
        }
    }
    return board;
};
