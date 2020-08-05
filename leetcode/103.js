/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const traverse = (root, level) => {
        if (!root) {
            return;
        }
        if (level >= result.length) {
            result[level] = [];
        }

        if (level % 2 === 0) {
            result[level].push(root.val);
        } else {
            result[level].unshift(root.val);
        }

        traverse(root.left, level + 1);
        traverse(root.right, level + 1);
    };

    const result = [];
    traverse(root, 0);
    return result;
};
