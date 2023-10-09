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
    
    // Define a recursive depth-first search (DFS) function named dfs.
    // This function will be used to traverse the binary tree.
    function dfs(node, maxVal) {
        // If the current node is null (i.e., a leaf or empty subtree), return 0.
        if (!node) {
            return 0;
        }

        // Initialize a variable count to 0.
        var count = 0;

        // Check if the value of the current node is greater than or equal to maxVal.
        if (node.val >= maxVal) {
            // If yes, update maxVal to the value of the current node,
            // and increment count by 1 since this node is considered "good."
            maxVal = node.val;
            count = 1;
        }

        // Recursively traverse the left subtree and add the count of good nodes to the count variable.
        count += dfs(node.left, maxVal);

        // Recursively traverse the right subtree and add the count of good nodes to the count variable.
        count += dfs(node.right, maxVal);

        // Return the total count of good nodes in the subtree rooted at the current node.
        return count;
    }

    // Start the DFS traversal from the root of the tree with the initial maxVal set to the root's value.
    return dfs(root, root.val);
};
