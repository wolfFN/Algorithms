/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root, next = null) {
    if (!root) {
        return;
    }
    root.next = next;
    connect(root.left, root.right);
    connect(root.right, next?.left);
    return root;
};
