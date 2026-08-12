/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
    this.capacity = k;
    this.arr = new Array(k);
    this.size = 0;
    this.f = 0;
    this.r = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.r = (this.r + 1) % this.capacity; // Fixed: this.r
  this.arr[this.r] = value;
  this.size++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.f = (this.f + 1) % this.capacity; // Fixed: this.f
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1; // Fixed: returns -1
  return this.arr[this.f];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1; // Fixed: returns -1
  return this.arr[this.r];
};
/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0; // Fixed: true if size is 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capacity; // Fixed: true if size equals capacity
};
/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */