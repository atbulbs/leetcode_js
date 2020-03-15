(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SingletonClass = factory());
}(this, (function () { 'use strict';

  var MyQueue = /** @class */ (function () {
      function MyQueue() {
          this.memoryStack = [];
          this.bufferStack = [];
      }
      // 将一个元素放入队列的尾部
      MyQueue.prototype.push = function (el) {
          if (this.memoryStack.length === 0) {
              this.head = el;
          }
          this.memoryStack.push(el);
      };
      // 从队列首部移除元素
      MyQueue.prototype.pop = function () {
          if (this.memoryStack.length === 1) {
              return this.memoryStack.pop();
          }
          else {
              return this.getHead(true);
          }
      };
      // 返回队列首部的元素
      MyQueue.prototype.peek = function () {
          if (this.memoryStack.length === 1) {
              return this.head;
          }
          else {
              return this.getHead(false);
          }
      };
      MyQueue.prototype.getHead = function (isRemove) {
          var head;
          var memoryLength = this.memoryStack.length;
          var bufferLength = this.bufferStack.length;
          if (bufferLength === 0) {
              for (var i = 0; i < memoryLength; ++i) {
                  this.bufferStack.push(this.memoryStack.pop());
              }
              if (isRemove) {
                  head = this.bufferStack.pop();
              }
              else {
                  head = this.bufferStack[memoryLength - 1];
              }
          }
          else {
              if (isRemove) {
                  head = this.bufferStack.pop();
              }
              else {
                  head = this.bufferStack[bufferLength - 1];
              }
          }
          return head;
      };
      // 返回队列是否为空
      MyQueue.prototype.empty = function () {
          return this.memoryStack.length === 0 && this.bufferStack.length === 0;
      };
      return MyQueue;
  }());

  return MyQueue;

})));
//# sourceMappingURL=leetcode_playground.umd.js.map
