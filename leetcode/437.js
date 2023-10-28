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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let count = 0;
    const map = { 0: 1 };

    const dfs = (node, currentPathSum) => {
        if (!node) {
            return;
        }

        currentPathSum += node.val;
        const oldPathSum = currentPathSum - targetSum;

        count += map[oldPathSum] || 0;
        map[currentPathSum] = (map[currentPathSum] || 0) + 1;

        dfs(node.left, currentPathSum);
        dfs(node.right, currentPathSum);
        map[currentPathSum]--;
    };

    dfs(root, 0);
    return count;
};
