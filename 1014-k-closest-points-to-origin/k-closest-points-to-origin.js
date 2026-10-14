/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    // // Create a max heap and tell it how to calculate priority using squared distance
    let maxHeap = new MaxPriorityQueue(
        (point) => point[0] * point[0] + point[1] * point[1],
    ); //The priority function runs automatically behind the scenes, calculates the squared distance, and uses that number just to sort the heap...The heap handles the sorting math internally, so you don't have to manually build [dist, point] pairs like you did in the brute-force approach.
    for (let i = 0; i < points.length; i++) {
        // Add the point; the heap automatically computes its priority
        maxHeap.enqueue(points[i]); //here we pass just the raw point (like [1, 3]) into maxHeap.enqueue().
        // If heap size exceeds k, kick out the point with the largest distance
        if (maxHeap.size() > k) {
            maxHeap.dequeue(); //Use maxHeap.dequeue() when you just want to delete the top item and throw it away.
        }
    }
    // Extract all remaining k points from the heap into our answer array
    let ans = [];
    while (!maxHeap.isEmpty()) {
        // Must use .element because dequeue() returns { priority, element }
        ans.push(maxHeap.dequeue()); //Use maxHeap.dequeue().element only when you need to grab the data and use it (like pushing it into an answer array).
    }
    return ans;
};