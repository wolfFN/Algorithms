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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const nodeQueue = [];
    const dfs = node => {
        if (!node || nodeQueue.length === k) {
            return;
        }
        dfs(node.left);
        nodeQueue.push(node.val);
        dfs(node.right);
    };

    dfs(root);

    console.log(nodeQueue);

    return nodeQueue[k - 1];
};
