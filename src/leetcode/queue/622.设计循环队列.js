// 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则
// 并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

// 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，
// 我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

// 你的实现应该支持如下操作：

// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。
 

// 示例：
 
 

// 提示：

// 所有的值都在 0 至 1000 的范围内；
// 操作数将在 1 至 1000 的范围内；
// 请不要使用内置的队列库。

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.maxLength = k
  this.head = k
  this.queue = new Array(k)
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.head > 0 && this.head <= this.maxLength) {
    this.queue.forEach((item, index) => {
      this.queue[index] = this.queue[index + 1]
    })
    this.queue[this.maxLength - 1] = value
    this.head--
    // console.warn('this.head', this.head)
    return true
  } else {
    return false
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.head >= 0 && this.head < this.maxLength) {
    this.queue[this.head++]
    return true
  } else {
    return false
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.queue[this.head] === undefined) {
    return -1
  } else {
    return this.queue[this.head]
  }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  // console.warn('this.head', this.head)
  if (this.head >= 0 && this.head <= this.maxLength) {
    return this.queue[this.queue.length - 1]
  } else {
    return -1
  }  
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return  this.head === this.maxLength
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  // console.warn('this.head', this.head)
  return  this.head === 0
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

var obj = new MyCircularQueue(3); // 设置长度为 3

console.warn(obj.enQueue(1));  // 返回 true

console.warn(obj.enQueue(2));  // 返回 true

console.warn(obj.enQueue(3));  // 返回 true

console.warn(obj.enQueue(4));  // 返回 false，队列已满

console.warn(obj.Rear());  // 返回 3

console.warn(obj.isFull());  // 返回 true

console.warn(obj.deQueue());  // 返回 true

console.warn(obj.enQueue(4));  // 返回 true

console.warn(obj.Rear());  // 返回 4