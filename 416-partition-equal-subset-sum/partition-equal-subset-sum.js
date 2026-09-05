/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) return false;
    let target = sum / 2;
    let prev = new Array(target + 1).fill(false);
    prev[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = target; j >= nums[i - 1]; j--) {
            if (nums[i - 1] <= j) {
                let pick = prev[j - nums[i - 1]]; //in tabu it is dp[i-1] here it is prev..means previous row...
                let notPick = prev[j];
                prev[j] = pick || notPick;
            } else {
                prev[j] = prev[j]; //we can safely delete this entire else block because if the if condition fails, prev[j] naturally keeps its old value anyway.
            }
        }
    }
    return prev[target];
};