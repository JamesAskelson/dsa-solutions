var minDepth = function(root) {
    if(root === null) return []
    let count = 1;
    let queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let curr = queue.shift()

            if(curr.left === null && curr.right === null){
                return count
            }
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
