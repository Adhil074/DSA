/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // 1. Create a plain max-heap for raw numbers
    let maxHeap = new MaxPriorityQueue();
    
    for (let stone of stones) {
        maxHeap.enqueue(stone);
    }
    
    // 2. Keep smashing as long as there are 2 or more stones left
    while (maxHeap.size() > 1) {
        // Do NOT use .element here; dequeue() returns the raw number directly
        let stone1 = maxHeap.dequeue();
        let stone2 = maxHeap.dequeue();
        
        // If they are not equal, push the leftover weight back into the heap
        if (stone1 !== stone2) {
            maxHeap.enqueue(stone1 - stone2);
        }
    }
    
    // 3. Return the last remaining stone weight, or 0 if the heap is empty
    if (maxHeap.size() === 1) {
        return maxHeap.front(); // Do NOT use .element here either
    } else {
        return 0;
    }
};