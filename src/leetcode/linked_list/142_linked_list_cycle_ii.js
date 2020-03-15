/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null) {
    return null
  } else {
    let slowPointer = head
    let fastPointer = head
    while (fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next
      if (slowPointer === fastPointer) {
        fastPointer = head
        while (fastPointer !== slowPointer) {
          fastPointer = fastPointer.next
          slowPointer = slowPointer.next
        }
        return slowPointer
      }
    }
    return null
  }
};

var detectCycle = function(head) {
  let slowPointer = head
  let fastPointer = head
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
    if (slowPointer === fastPointer) {
      slowPointer = head
      while (slowPointer !== fastPointer) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
      }
      return slowPointer
    }
  }
  return null
};
