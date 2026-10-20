/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let n = nums.length;
    let l = 0;
    let r = 0;
    let jumps = 0;
    while (r < n - 1) {
        //r should be below n-1, if it crosses we exit...
        let far = 0; //what is far distance we can go from current index...
        for (let i = l; i <= r; i++) {
            far = Math.max(far, i + nums[i]); //from current standing position + what value we have at current position...
        }
        l = r + 1; //
        r = far; // Move the right pointer to the furthest point we just calculated
        jumps++; //Add 1 to our total jumps because we completed a wave/range
    }
    return jumps;
};