/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let value = 0
  let currentNode = head
  while (currentNode.next) {
      value = value * 2 + currentNode.val
      currentNode = currentNode.next
  }
  return value
};