/**
 * @description 辅助栈数据量同步保存最小值
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this._stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.min = x
    this.stack.push(x)
    this._stack.push(x)
  } else if (x < this.getMin()) {
    this.stack.push(x)
    this._stack.push(x)
  } else {
    this.stack.push(x)
    this._stack.push(this.getMin())
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  return this._stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this._stack.length) {
    return this._stack[this._stack.length - 1]
  } else {
    return this.top()
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */