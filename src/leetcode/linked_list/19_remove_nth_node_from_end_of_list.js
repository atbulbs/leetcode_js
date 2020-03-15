/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(null)
  dummy.next = head
  let slowPointer = dummy
  let fastPointer = dummy
  while (n-- > -1) {
    fastPointer = fastPointer.next
  }
  while (fastPointer !== null) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next
  }
  slowPointer.next = slowPointer.next.next
  return slowPointer === dummy ? slowPointer.next : head
};

// [1,2]
// 2
// -> [2]