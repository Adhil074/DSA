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
  if (this.size === this.capacity) return false;
  this.r = (this.r + 1) % this.capacity;
  this.arr[this.r] = value;
  this.size++;
  return true;
};


/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.size === 0) return false;
  this.f = (this.f + 1) % this.capacity;
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.size === 0) return -1;
  return this.arr[this.f];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.size === 0) return -1;
  return this.arr[this.r];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.size === 0) return true;
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.size === this.capacity) return true;
  return false;
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