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
var removeDuplicateNodes = function(head) {
  if (head === null || head.next === null) {
    return head
  } else {
    const hashTable = {
      [head.val]: 1
    }
    let cur = head
    while (cur.next !== null) {
      if(hashTable[cur.next.val] === undefined) {
        hashTable[cur.next.val] = 1
        cur = cur.next
      } else {
        cur.next = cur.next.next
      }
    }
    return head
  }
};