/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) {
        return head;
    }

    let cur = head;
    let count = k;
    while (--count && cur.next) {
        cur = cur.next;
    }

    if (count) {
        return head;
    }

    const nextStart = cur.next;
    cur.next = null;

    const [start, end] = reverseList(head);

    end.next = reverseKGroup(nextStart, k);
    return start;
};

var reverseList = function (head) {
    let cur = head,
        pre = null,
        post = null;
    while (cur) {
        post = cur.next;
        cur.next = pre;
        pre = cur;
        cur = post;
    }
    return [pre, head];
};
