
// 操作计数
let operationCount = 0

// 定义响应式, 劫持数组读写
function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
     get () {
      operationCount++
      return value
    },
     set (newVal) {
      operationCount++
      value = newVal
    }
  })
}

// 观察数组的每个元素
function observe(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

// 创建一个size为100的数组并用0填充
let array = new Array(100).fill(0)
observe(array)

// 我们也可以用代理劫持数组的读写操作
// array = new Proxy(new Array(100).fill(0), {
//   get (target, key, receiver) {
//     operationCount++
//     return Reflect.get(target, key, receiver)
//   },
//   set (target, key, value, receiver) {
//     operationCount++
//     return Reflect.set(target, key, value, receiver)
//   }
// })

// 打印操作计数
function logOperationCount (caseName, fnName, ...args) {
  operationCount = 0
  array[fnName](...args)
  console.warn(caseName + ' operationCount: ', operationCount)
}

logOperationCount('首部增', 'unshift', 0)

logOperationCount('尾部增', 'push', 0)

logOperationCount('首部删', 'shift')

logOperationCount('中间删', 'splice', 50, 1)

logOperationCount('尾部删', 'pop')

operationCount = 0
array[50] = 1
console.warn('改 operationCount: ', operationCount)

operationCount = 0
array[50]
console.warn('查 operationCount: ', operationCount)


// 链表节点
class LinkedListNode {
  data: any
  next: LinkedListNode
  constructor(data) {
    this.data = data
  }
}

// 范围检查
function checkRange (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const rawFunction = propertyDescriptor.value
  propertyDescriptor.value = function (...args: any[]) {
    const size = target['getSize'].apply(this)
    let index
    if (propertyName === 'insert') {
      index = args[1]
      if (index < 0 || index > size) {
        throw new RangeError(`param index: ${ index } is out of range`)
      }
    } else {
      index = args[0]
      if (index < 0 || index >= size) {
        throw new RangeError(`param index: ${ index } is out of range`)
      }
    }
    return rawFunction.apply(this, args)
  }
  return propertyDescriptor
}

// 链表
class LinkedList {

  // 头部指针
  private head: LinkedListNode
  // 尾部指针
  private tail: LinkedListNode
  // 容量
  private size: number = 0

  // 增操作
  @checkRange
  insert (data: any, index: number = this.size) {
    const insertedNode: LinkedListNode = new LinkedListNode(data)
    if (this.size === 0) {
      // 链表没有节点
      this.head = insertedNode
      this.tail = insertedNode
      this.tail.next = null
    } else if (index === 0) {
      // 从头部插入
      insertedNode.next = this.head
      this.head = insertedNode
    } else if (this.size === index) {
      // 从尾部插入
      this.tail.next = insertedNode
      this.tail = insertedNode
      this.tail.next = null
    } else {
      // 从中间插入
      const prevNode: LinkedListNode = this.get(index - 1)
      insertedNode.next = prevNode.next
      prevNode.next = insertedNode
    }
    ++this.size
  }

  // 删操作
  @checkRange
  remove (index: number): LinkedListNode {
    let removedNode: LinkedListNode = null
    if (index === 0) {
      // 从头部删除
      removedNode = this.head
      this.head = this.head.next
    } else if (index === this.size - 1) {
      // 从尾部删除
      const secondLastNode: LinkedListNode = this.get(this.size - 1)
      removedNode = secondLastNode.next
      secondLastNode.next = null
      this.tail = secondLastNode
    } else {
      // 从中间删除
      const prevNode: LinkedListNode = this.get(index - 1)
      removedNode = prevNode.next
      prevNode.next = prevNode.next.next
    }
    --this.size
    return removedNode
  }

  // 改操作
  @checkRange
  set (index: number, value: any) {
    const currentNode = this.get(index)
    currentNode.data = value
  }

  // 查操作
  @checkRange
  get (index: number): LinkedListNode{
    let res: LinkedListNode = this.head
    for (let i = 0; i < index; ++i) {
      res = res.next
    }
    return res
  }

  // 从头部到尾部打印所有的链表节点
  print () {
    let currentNode: LinkedListNode = this.head
    while(currentNode) {
      console.dir(currentNode)
      currentNode = currentNode.next
    }
  }

  getSize (): number {
    return this.size
  }

}

const myLinkedList: LinkedList = new LinkedList()

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.set(1, 'c')
myLinkedList.print()
