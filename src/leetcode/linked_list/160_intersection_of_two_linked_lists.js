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
  let isPointerAOnLinkedListA = true
  let isPointerBOnLinkedListB = true
  while (pointerA !== pointerB) {
    if (pointerA.next) {
      pointerA = pointerA.next
    } else {
      pointerA = isPointerAOnLinkedListA ? headB : headA
      isPointerAOnLinkedListA = !isPointerAOnLinkedListA
    }
    if (pointerB.next) {
      pointerB = pointerB.next
    } else {
      pointerB = isPointerBOnLinkedListB ? headA : headB
      isPointerBOnLinkedListB = !isPointerBOnLinkedListB
    }
  }
  return pointerA
};

var getIntersectionNode = function(headA, headB) {
  while(headA){
      headA.sep = 1;
      headA = headA.next;
  }
  while(headB){
      if(headB.sep) return headB
      headB = headB.next;
  }
};