var levelOrder = function(root) {
    if(root === null) return []
    let res = []
    let queue = [root]
    while (queue.length > 0) {

        let leafs = []
        let size = queue.length;

        for(let i = 0; i < size; i++) {
            let curr = queue.shift()
            leafs.push(curr.val)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }

        }
        res.push(leafs)
    }
    return res
};
