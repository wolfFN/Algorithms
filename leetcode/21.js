/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const head = new ListNode();
    let result = head;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            result.next = list1;
            list1 = list1.next;
        } else {
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
    }

    result.next = list1 || list2;
    return head.next;
};
