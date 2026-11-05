/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let n = candidates.length;
    candidates.sort((a, b) => a - b); //sorting,lets us stop a loop instantly when a number exceeds our remaining target.
    let ans = [];
    function solve(idx, current, target) {
        if (target === 0) {
            ans.push([...current]);
            return;
        }
        for (let i = idx; i < n; i++) {
            //Instead of writing manual pick/skip branches, a for loop from idx to the end of the array handles all choices cleanly.
            if (candidates[i] > target) {
                //Pruning Check,since the array is sorted, any number after this will also be too big, saving us unnecessary iterations).
                break;
            }
            current.push(candidates[i]); //include case
            solve(i, current, target - candidates[i]);
            current.pop(); //backtrack....and here we dont need explicit exclude case,the for loop itself naturally advances to the next index (i + 1) on its next iteration...
        }
    }
    solve(0, [], target);
    return ans;
};