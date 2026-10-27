/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let n = intervals.length;
    let ans = [];
    //Step 1: Push all intervals that come completely before the new interval.
    let i = 0;
    while (i < n && intervals[i][1] < newInterval[0]) {
        //if curr interval's end smaller than new interval's first there is no overlapping(left part)...since this is in asecnding order curr pair's end is always smaller than nre pair's start....
        ans.push(intervals[i]); //directly push pair in answer array
        i++; //move forward
    }
    //Step 2: Merge all overlapping intervals...
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    ans.push(newInterval);
    //Step 3: Push the remaining intervals (the right side)
    while (i < n) {
        ans.push(intervals[i]);
        i++;
    }
    return ans;
};