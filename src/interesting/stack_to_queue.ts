export default class MyQueue {

  private head: any
  private memoryStack: Array<any>
  private bufferStack: Array<any>

  constructor () {
    this.memoryStack = []
    this.bufferStack = []
  }

  // 将一个元素放入队列的尾部
  public push (el) {
    if (this.memoryStack.length === 0) {
      this.head = el
    }
    this.memoryStack.push(el)
  }

  // 从队列首部移除元素
  public pop () {
    if (this.memoryStack.length === 1) {
      return this.memoryStack.pop()
    } else {
      return this.getHead(true)
    }
  }

  // 返回队列首部的元素
  public peek () {
    if (this.memoryStack.length === 1) {
      return this.head
    } else {
      return this.getHead(false)
    }
  }

  public getHead (isRemove: boolean) {
    let head
    const memoryLength = this.memoryStack.length
    const bufferLength = this.bufferStack.length
    if (bufferLength === 0) {
      for (let i = 0; i < memoryLength; ++i) {
        this.bufferStack.push(this.memoryStack.pop())
      }
      if (isRemove) {
        head = this.bufferStack.pop()
      } else {
        head = this.bufferStack[memoryLength - 1]
      }
    } else {
      if (isRemove) {
        head = this.bufferStack.pop()
      } else {
        head = this.bufferStack[bufferLength - 1]
      }
    }
    return head
  }

  // 返回队列是否为空
  public empty () {
    return this.memoryStack.length === 0 && this.bufferStack.length === 0
  }

}
