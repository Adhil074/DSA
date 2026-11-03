/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    // Step 1: Sort the array so duplicate numbers sit right next to each other
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = [];
    function solve(i, current) {
        if (i == n) {
            // Base case: if we reach the end of the array, save a copy of current..
            ans.push([...current]);
            return;
        }
        current.push(nums[i]); //include case
        solve(i + 1, current);
        current.pop(); //backtrack
        // Exclude choice: skip all identical duplicate values to avoid duplicate subsets
        let idx = i + 1; //this is for tracking duplicates, we update this until we reach unique val...
        while (idx < n && nums[idx] === nums[idx - 1]) {
            idx++;
        }
        solve(idx, current); //now call func on new val...
    }
    solve(0, []);
    return ans;
};