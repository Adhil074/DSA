
var MedianFinder = function () {
    this.maxHeap = new MaxPriorityQueue();
    this.minHeap = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.maxHeap.enqueue(num);
    this.minHeap.enqueue(this.maxHeap.dequeue());
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let n = this.maxHeap.size() + this.minHeap.size();
    if (n % 2 === 0) {
        return (this.maxHeap.front() + this.minHeap.front()) / 2; //Think .front() here, because findMedian shouldn't delete anything!
    } else {
        return this.maxHeap.front();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */