/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length;
    let next1 = 0;
    let next2 = 0;
    let curr;
    for (let i = n - 1; i >= 0; i--) {
        curr = Math.max(nums[i] + next2, next1);
        next2 = next1;
        next1 = curr;
    }
    return curr;
};