/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev2 = 1;//Remember your tabulation base cases: dp[0] = 1 and dp[1] = 1. Since prev2 represents step 0, it needs to start at 1, not 0.
    let prev1 = 1;
    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};