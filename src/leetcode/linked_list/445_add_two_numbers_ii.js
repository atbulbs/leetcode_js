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
var addTwoNumbers = function(l1, l2) {
  let str1 = ''
  let head1 = l1
  while (head1) {
    str1 += head1.val
    head1 = head1.next
  }
  let str2 = ''
  let head2 = l2
  while (head2) {
    str2 += head2.val
    head2 = head2.next
  }
  const numStr = (BigInt(str1) + BigInt(str2)) + ''
  const res = new ListNode(numStr[0])
  let head = res
  for(let i = 1; i < numStr.length; ++i) {
    head.next = new ListNode(numStr[i])
    head = head.next
  }
  return res
};