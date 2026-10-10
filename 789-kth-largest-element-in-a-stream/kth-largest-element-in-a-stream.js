/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();
    for (let num of nums) {//loop through the initial array to add each number into the queue.
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.minHeap.enqueue(val);//push new val in minheap..
    if (this.minHeap.size() > this.k) {//check if the heap size exceeds k..
        this.minHeap.dequeue();//then pop it..
    }
    return this.minHeap.front()//gives kth largest fro heap/pq
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */