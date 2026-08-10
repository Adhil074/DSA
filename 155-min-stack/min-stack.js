
var MinStack = function() {
      this.st = [];

};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if (this.st.length === 0) {
    this.st.push([value, value]);
  } else {
    let currentMin = this.st[this.st.length - 1][1];
    let newMin = Math.min(value, currentMin);
    this.st.push([value, newMin]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st[this.st.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */