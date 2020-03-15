/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let res = false
  while (head && head.next) {
    if (head.flag) {
      res = true
      break
    } else {
      head.flag = 1
      head = head.next
    }
  }
  return res
};

var hasCycle = function(head) {
  const map = new Map()
  while (head) {
    if (map.get(head)) {
      return true
    } else {
      map.set(head, head)
      head = head.next
    }
  }
  return false
}

var hasCycle = function(head) {
  let slowPointer = head
  let fastPointer = head
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
    if (fastPointer === slowPointer) {
      return true
    }
  }
  return false
}
