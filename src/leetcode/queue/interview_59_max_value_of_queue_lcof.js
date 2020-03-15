var MaxQueue = function() {
  this.queue = []
  this.deque = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (this.deque.length === 0) {
    return -1
  } else {
    return this.deque[0]
  }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
  if (this.deque.length === 0) {
    this.deque.push(value)
  } else {
    while (this.deque.length > 0 && this.deque[this.deque.length - 1] < value) {
      this.deque.pop()
    }
    this.deque.push(value)
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (this.queue.length > 0) {
    const res = this.queue.shift()
    if (res === this.deque[0]) {
      this.deque.shift()
    }
    return res
  } else {
    return -1
  }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */