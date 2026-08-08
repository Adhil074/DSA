/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let t1 = l1;
  let t2 = l2;
  let carry = 0;
  while (t1 !== null || t2 !== null || carry !== 0) {
    let v1 = 0;
    if (t1 !== null) {
      v1 = t1.val;
    } else {
      v1 = 0;
    }
    let v2 = 0;
    if (t2 !== null) {
      v2 = t2.val;
    } else {
      v2 = 0;
    }
    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (t1!== null) t1 = t1.next;
    if (t2!== null) t2 = t2.next;
  }
  return dummy.next;
};