/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let ans = [];
    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    // Step 2: Loop through each interval
    for (let i = 0; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        // If ans is empty, or the current interval does not overlap with the last interval in ans
        if (ans.length === 0 || ans[ans.length - 1][1] < currentInterval[0]) {
            ans.push(currentInterval);
        } else {
            // If they overlap, merge them by updating the end time of the last interval in ans
            ans[ans.length - 1][1] = Math.max(
                ans[ans.length - 1][1],
                currentInterval[1],
            );
        }
    }
    // Step 3: Return the merged intervals array
    return ans;
};