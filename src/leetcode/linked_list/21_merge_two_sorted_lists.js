/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) {
    return l1
  }
  let head1 = l1
  let head2 = l2
  let head = null
  let res
  while (head1 || head2) {
    if (head1 !== null && head2 === null) {
      if (head === null) {
        head = head1
        res = head
      } else {
        head.next = head1
        head = head.next
      }
      head1 = head1.next
    } else if (head2 !== null && head1 === null) {
      if (head === null) {
        head = head2
        res = head
      } else {
        head.next = head2
        head = head.next
      }
      head2 = head2.next
    } else {
      if (head1.val > head2.val) {
        if (head === null) {
          head = head2
          res = head
        } else {
          head.next = head2
          head = head.next
        }
        head2 = head2.next
      } else {
        if (head === null) {
          head = head1
          res = head
        } else {
          head.next = head1
          head = head.next
        }
        head1 = head1.next
      }
    }
  }
  return res
};