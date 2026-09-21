/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let n = nums.length;
    let seen = new Map();
    for (let i = 0; i < n; i++) {
        if (seen.has(target - nums[i])) {
            return [i, seen.get(target - nums[i])];
        } else {
            seen.set(nums[i], i);
        }
    }
};