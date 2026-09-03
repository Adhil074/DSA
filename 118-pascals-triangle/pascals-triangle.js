/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1).fill(1); //Row count grows by 1 on every row, that's why i+1..
        for (let j = 1; j < i; j++) {
            //here i is curr row, since we filing curr row we use that...
            res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
        }
    }
    return res;
};