/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let n = nums.length;
    let ans = []; // This will store all our final subsets
    function solve(i, current) {
        //To build subsets that have multiple elements, you need a temporary array (let's call it current) that collects choices as you go down the recursion tree...current builds the path step-by-step (e.g., adding 1, then adding 2).
        // Base case: if we reach the end of the array, we save a copy of our current subset into ans
        if (i === n) {
            ans.push([...current]); // Push a shallow copy of the current path..When i === n (the end of the array), we take a snapshot of current using the spread operator ([...current]) and save it to ans.
            return;
        }
        // Choice 1: Include the current number (Take)
        current.push(nums[i]);
        solve(i + 1, current);

        // Backtrack: remove the number we just added so we can try the exclude path
        current.pop();
        // Choice 2: Exclude the current number (Skip)
        solve(i + 1, current);
    }
    // Kick off recursion at index 0 with an empty current subset array
    solve(0, []);
    return ans;
};