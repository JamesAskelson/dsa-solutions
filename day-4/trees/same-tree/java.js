/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const queue1 = [p];
    const queue2 = [q];

    while(queue1.length > 0 && queue2.length > 0) {
        const node1 = queue1.pop()
        const node2 = queue2.pop()

        if(node1?.val !== node2?.val) {
            return false;
        }

        if(node1?.right || node2?.right){
            queue1.push(node1.right)
            queue2.push(node2.right)
        }

        if(node1?.left || node2?.left){
            queue1.push(node1.left)
            queue2.push(node2.left)
        }
    }

    return true;
};

console.log(isSameTree([1,2,3], [1,2,3]))
