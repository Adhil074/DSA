/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let prev2 = cost[0]; //prev2 and prev1 need to store the actual costs/values at steps 0 and 1,like in tabu...
    let prev1 = cost[1];
    for (let i = 2; i <= n; i++) {
        let curr;
        if (i === n) {
            curr = Math.min(prev2, prev1);
        }
        if (i < n) {
            curr = cost[i] + Math.min(prev2, prev1);
        }
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};