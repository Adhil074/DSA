/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let n = nums.length;
    let ans = [];
    let seen = new Map();
    for (let i = 0; i < n; i++) {
        if (seen.has(nums[i])) {
            seen.set(nums[i], seen.get(nums[i]) + 1);
        } else {
            seen.set(nums[i], 1);
        }
    }
    // Step 2: Create empty bucket array (size n + 1)
    let bucket = [];
    for (let i = 0; i <= n; i++) {
        bucket.push([]); //here bucket is 2d array..
    }
    for (let [num, freq] of seen.entries()) {
        bucket[freq].push(num); //this will traverse on map and populate bucket array, it directly puts val in matched frequency...here bucket array's index=frequncy...
    }
    // Step 4: Traverse backward to collect top k elements(since indexs are sorted in nature and here they are playing freq role so start from back to get bigger freqs first)
    for (let i = bucket.length - 1; i >= 0; i--) {
        // Loop through the inner array at bucket[i] using index j
        for (let j = 0; j < bucket[i].length; j++) {
            ans.push(bucket[i][j]); //To access each number inside bucket[i], we write bucket[i][j] (where i is the frequency bucket index, and j is the position inside that bucket's list).

            // Stop as soon as we collect k elements
            if (ans.length === k) {
                return ans;
            }
        }
    }
};