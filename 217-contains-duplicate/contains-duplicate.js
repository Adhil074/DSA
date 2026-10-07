/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let n = nums.length;
    let seen = new Set();
    for (let i = 0; i < n; i++) {
        if (seen.has(nums[i])) {
            return true;
        } else {
            seen.add(nums[i]);
        }
    }
    return false;
};