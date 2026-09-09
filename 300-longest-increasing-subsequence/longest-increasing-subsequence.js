/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let nextRow = new Array(n + 1).fill(0); // Represents curr + 1

    for (let curr = n - 1; curr >= 0; curr--) {
        let currRow = new Array(n + 1).fill(0); // Represents curr

        for (let prev = curr - 1; prev >= -1; prev--) {
            let take = 0;
            if (prev === -1 || nums[curr] > nums[prev]) {
                take = 1 + nextRow[curr + 1]; // dp[curr+1][curr+1]
            }
            let notTake = 0 + nextRow[prev + 1]; // dp[curr+1][prev+1]

            currRow[prev + 1] = Math.max(take, notTake);
        }

        nextRow = currRow; // Move current row to nextRow for the next iteration
    }

    return nextRow[0]; // Represents solve(0, -1) -> dp[0][-1 + 1]
};