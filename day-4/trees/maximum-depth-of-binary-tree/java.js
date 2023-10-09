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
var maxDepth = function(root) {
    // If the current node is null, it contributes a depth of 0 to the depth calculation
    if (root === null) {
        return 0;
    }

    // Recursively calculate the depth of the left subtree
    const leftDepth = maxDepth(root.left);

    // Recursively calculate the depth of the right subtree
    const rightDepth = maxDepth(root.right);

    // The maximum depth of the current subtree is the maximum of the depths of its left and right subtrees, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};

