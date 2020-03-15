/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.tail_queue = []
  this.cache_queue = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.tail_queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.tail_queue.length === 1) {
    return this.tail_queue.shift()
  } else if (this.tail_queue.length === 0 && this.cache_queue.length > 0) {
    for (let i = this.cache_queue.length; i > 1; --i) {
      const item = this.cache_queue.shift()
      this.push(item)
    }
    return this.cache_queue.shift()
  } else if (this.tail_queue.length > 1) {
    for (let j = this.tail_queue.length; j > 1; --j) {
      const item = this.tail_queue.shift()
      this.cache_queue.push(item)
    }
    return this.tail_queue.shift()
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.tail_queue.length > 0) {
    return this.tail_queue[this.tail_queue.length - 1]
  } else if (this.cache_queue.length > 0) {
    return this.cache_queue[this.cache_queue.length - 1]
  }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.tail_queue.length === 0 && this.cache_queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


 /**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x)
  for (let i = this.stack.length; i > 1; --i) {
    this.stack.push(this.stack.shift())
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.stack.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */