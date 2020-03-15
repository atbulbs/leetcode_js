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
var isPalindrome = function(head) {
  // 考虑空链表
  if (head === null) {
    return true
  } else {
    // 头指针
    let headPointer = head
    // 尾指针
    let tailPointer = head
    // 把链表变成双向链表
    while (tailPointer.next) {
      tailPointer.next.prev = tailPointer
      tailPointer = tailPointer.next
    }
    // 分别从头尾向中间依次比较
    while(headPointer !== tailPointer) {
      if (headPointer.next !== tailPointer) {
        if (headPointer.val === tailPointer.val) {
          headPointer = headPointer.next
          tailPointer = tailPointer.prev
        } else {
          return false
        }
      // 考虑偶数链表
      } else {
        return headPointer.val === tailPointer.val
      }
    }
    return true
  }
};

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
var isPalindrome = function(head) {
  if (head === null) {
    return true
  } else if (head.next === null) {
    return true
  } else {
    let slowPointer = head
    let fastPointer = head
    let _head = null
    let temp = null
    // 找到中间节点, 并翻转前半截链表,
    // 让_head指向翻转后的前半截链表的头部,
    // 让slow指向后半截链表的头节点
    while (fastPointer && fastPointer.next) {
      _head = slowPointer
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next
      _head.next = temp
      temp = _head
    }
    // 奇数链表跳过最中间的节点
    if (fastPointer !== null) {
      slowPointer = slowPointer.next
    }
    while (_head) {
      if (_head.val !== slowPointer.val) {
        return false
      }
      _head = _head.next
      slowPointer = slowPointer.next
    }
    return true
  }
};