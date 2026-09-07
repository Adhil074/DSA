/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let n = nums.length;
    let totalSum = 0; // Variable to store total sum of all elements
    // Calculate sum of all elements in the array
    for (let i = 0; i < n; i++) {
        totalSum += nums[i]; // Add each element to totalSum
    }
    // If target is bigger than total sum, reaching target is impossible
    if (Math.abs(target) > totalSum) return 0;
    // If (totalSum + target) is odd, dividing by 2 gives a decimal, so return 0
    if ((totalSum + target) % 2 !== 0) return 0;
    // Calculate required subset target s1 using the formula
    let s1 = (totalSum + target) / 2;
    let prev = new Array(s1 + 1).fill(0);
    prev[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = s1; j >= nums[i - 1]; j--) {
            let pick = prev[j - nums[i - 1]];
            let notPick = prev[j];
            prev[j] = pick + notPick;
        }
    }
    return prev[s1]
};