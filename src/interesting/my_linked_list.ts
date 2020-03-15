
let operationCount = 0

function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
     get () {
      // console.log(`get key: ${ key } value: ${ value }`)
      operationCount++
      return value
    },
     set (newVal) {
      // console.log(`set key: ${ key } value: ${ newVal }`)
      operationCount++
      value = newVal
    }
  })
}

function observe(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

let array = new Array(100).fill(0)
observe(array)
console.warn('1')
array = new Proxy(new Array(100).fill(0), {
  get (target, key, receiver) {
    operationCount++
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    operationCount++
    return Reflect.set(target, key, value, receiver)
  }
})

function logOperationCount (caseName, cb, ...args) {
  operationCount = 0
  cb.apply(array, args)
  console.warn(caseName + ' operationCount: ', operationCount)
}

logOperationCount('首部增', array.unshift, 0)

logOperationCount('尾部增', array.push, 0)

logOperationCount('首部删', array.shift)

logOperationCount('尾部删', array.pop)

operationCount = 0
array[50] = 1
console.warn('改 operationCount: ', operationCount)

operationCount = 0
array[50]
console.warn('查 operationCount: ', operationCount)


class LinkedListNode {
  data: any
  next: LinkedListNode
  constructor(data) {
    this.data = data
  }
}

function checkRange (target: Object, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const rawFunction = propertyDescriptor.value
  propertyDescriptor.value = function (...args: any[]) {
    const size = target['getSize'].apply(this)
    let index
    if (propertyName === 'insert') {
      if (typeof args[1] === 'number') {
        index = args[1]
      }
    } else {
      index = args[0]
    }
    if (index < 0 || index >= size) {
      throw new RangeError(`param index: ${ index } is out of range`)
    } else {
      return rawFunction.apply(this, args)
    }
  }
  return propertyDescriptor
}

class LinkedList {

  private head: LinkedListNode
  private tail: LinkedListNode
  private size: number = 0

  @checkRange
  insert (data: any, index?: number) {
    const insertedNode: LinkedListNode = new LinkedListNode(data)
    if (this.size === 0) {
      this.head = insertedNode
      this.tail = insertedNode
      this.tail.next = null
    } else if (index === 0) {
      insertedNode.next = this.head
      this.head = insertedNode
    } else if (this.size === index) {
      this.tail.next = insertedNode
      this.tail = insertedNode
      this.tail.next = null
    } else {
      const prevNode: LinkedListNode = this.get(index - 1)
      insertedNode.next = prevNode.next
      prevNode.next = insertedNode
    }
    ++this.size
  }

  @checkRange
  get (index: number): LinkedListNode{
    let res: LinkedListNode = this.head
    for (let i = 0; i < index; ++i) {
      res = res.next
    }
    return res
  }

  @checkRange
  remove (index: number): LinkedListNode {
    let removedNode: LinkedListNode = null
    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else if (index === this.size - 1) {
      const secondLastNode: LinkedListNode = this.get(this.size - 1)
      removedNode = secondLastNode.next
      secondLastNode.next = null
      this.tail = secondLastNode
    } else {
      const prevNode: LinkedListNode = this.get(index - 1)
      removedNode = prevNode.next
      prevNode.next = prevNode.next.next
    }
    --this.size
    return removedNode
  }

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

const myList = new LinkedList()
myList.print()

myList.insert('a')

myList.insert('b')
myList.print()
