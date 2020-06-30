var CQueue = function() {
  this.inputStack = []
  this.outputStack = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.inputStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.outputStack.length) {
    return this.outputStack.pop()
  } else {
    if (this.inputStack.length) {
      while (this.inputStack.length) {
        this.outputStack.push(this.inputStack.pop())
      }
      return this.outputStack.pop()
    } else {
      return  -1
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */