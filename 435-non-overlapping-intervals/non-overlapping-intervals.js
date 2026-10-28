/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let n = intervals.length;
    if (n === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]); //Sorting by end time ensures you always pick the interval that finishes the earliest, leaving maximum room for the rest.
    let count = 0;
    let prevEnd = intervals[0][1]; //A prevEnd variable to store the end time of the first interval
    for (let i = 1; i < n; i++) {
        //we already storing last interval in prevEnd so we start from 1..
        if (prevEnd <= intervals[i][0]) {
            prevEnd = intervals[i][1]; //no overlap! Update prevEnd to the current interval's end
        } else {
            //overlap...Increment removal count
            count++;
        }
    }
    return count;
};