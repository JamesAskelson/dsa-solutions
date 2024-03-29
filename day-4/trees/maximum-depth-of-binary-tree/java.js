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
    if(root === null) return []
    let count = 0;
    let queue = [root]
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let curr = queue.shift()
            if(curr?.left){
                queue.push(curr.left)
            }
            if(curr?.right){
                queue.push(curr.right)
            }
        }
        count++
    }
    return count
};
