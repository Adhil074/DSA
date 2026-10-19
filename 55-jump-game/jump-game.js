/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = nums.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (i > max) {
            //If your current index is greater than your max reach (i > max), it means you cannot even reach this spot. In that case, you are blocked and should immediately return false.
            return false;
        }
        max = Math.max(max, i + nums[i]); //It compares your current max reach with the new furthest point you can touch from where you are standing right now (i + nums[i]), and keeps the bigger number.
    }
    return true;
};