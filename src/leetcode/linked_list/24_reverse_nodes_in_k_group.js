/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let prev = null
  let curr = head
  let i = k
  while (curr !== null && i-- > 0) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    if (k === 0) {
      i = k
    }
  }
};