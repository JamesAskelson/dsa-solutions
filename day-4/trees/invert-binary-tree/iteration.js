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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;
    const queue = [root]
    while (queue.length > 0) {
        const node = queue.shift()
        console.log(node)
        const left = node.left
        node.left = node.right
        node.right = left
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }

    }

    return root
};
