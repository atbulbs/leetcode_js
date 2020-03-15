/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    headA.flag = 1
    headA = headA.next
  }
  while (headB) {
    if (headB.flag) {
      return headB
    }
    headB = headB.next
  }
  return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let pointerA = headA
  let pointerB = headB
  while (pointerA !== pointerB) {
    if (pointerA) {
      pointerA = pointerA.next
    } else {
      pointerA = headB
    }

    if (pointerB) {
      pointerB = pointerB.next
    } else {
      pointerB = headA
    }

  }
  return pointerA
}