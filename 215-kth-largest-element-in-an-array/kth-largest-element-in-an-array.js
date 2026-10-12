/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let minHeap = new MinPriorityQueue();
    // 1. Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue(nums[i]);
        // 2. If heap size exceeds k, remove the smallest element
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    // 3. The root of the min-heap is now the kth largest element
    return minHeap.front();
};