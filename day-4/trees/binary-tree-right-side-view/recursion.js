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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // Check if the root node is null (empty tree). If so, return an empty array.
    if (root === null) {
        return [];
    }
    
    // Initialize an empty queue to perform level-order traversal.
    let queue = [];
    // Initialize an empty array to store the right side view elements.
    let arr = [];
    // Add the root node to the queue to start traversal.
    queue.push(root);

    // Start a while loop to process each level of the tree.
    while (queue.length > 0) {
        // Initialize a variable to store the last value encountered at this level.
        let lastVal;

        // Get the number of nodes at this level to control the loop.
        const levelSize = queue.length;

        // Iterate through all nodes at the current level.
        for (let i = 0; i < levelSize; i++) {
            // Remove the current node from the queue.
            const curr = queue.shift();

            // Update lastVal with the value of the current node.
            lastVal = curr.val;

            // Add the left child to the queue if it exists.
            if (curr.left) {
                queue.push(curr.left);
            }

            // Add the right child to the queue if it exists.
            if (curr.right) {
                queue.push(curr.right);
            }
        }

        // After processing all nodes at this level, add lastVal to the result array.
        arr.push(lastVal);
    }

    // Return the array containing the right side view elements of the binary tree.
    return arr;
};
