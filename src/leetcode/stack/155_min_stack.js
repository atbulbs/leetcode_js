/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.stack.push(x)
    this.stack.push(x)
  } else {
    let min = this.stack[this.stack.length - 1]
    if (x < min) {
      min = x
    }
    this.stack.push(x)
    this.stack.push(min)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 2]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */