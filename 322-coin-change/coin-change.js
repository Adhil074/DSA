/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let n = coins.length;
    let prev = new Array(amount + 1).fill(Infinity);
    prev[0] = 0; //here prev=prev row(dp[i-1])...so when j(amount)==0 return 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i - 1] <= j) {//You need to check if the current coin value fits....
                let pick = 1 + prev[j - coins[i - 1]];
                let notPick = prev[j];
                prev[j] = Math.min(pick, notPick);
            } else {
                prev[j] = prev[j];
            }
        }
    }
    let ans = prev[amount];
    if (ans !== Infinity) {
        return ans;
    } else {
        return -1;
    }
};
