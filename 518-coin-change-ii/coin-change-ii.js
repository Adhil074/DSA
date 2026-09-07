/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let n = coins.length;
    let prev = new Array(amount + 1).fill(0);
    prev[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {//You can start the inner loop from j = 1 since prev[0] stays 1 across all iterations
            if (coins[i - 1] <= j) {
                let pick = prev[j - coins[i - 1]];
                let notPick = prev[j];
                prev[j] = pick + notPick;
            } else {
                prev[j] = prev[j];
            }
        }
    }
    return prev[amount];
};
