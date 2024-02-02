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
 * @return {number}
 */

// Define a function named goodNodes that takes the root of a binary tree as input.
var goodNodes = function(root) {
    let count = 0
    function dfs(node, maxVal) {
        if (!node) {
            return 0;
        }

        if (node.val >= maxVal) {
            maxVal = node.val;
            count = 1
        } else {
            count = 0
        }

        count += dfs(node.left, maxVal)
        count += dfs(node.right, maxVal)

        return count;
    }

    return dfs(root, root.val)
};
