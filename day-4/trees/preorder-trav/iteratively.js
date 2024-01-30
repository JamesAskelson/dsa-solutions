var preorderTraversal = function(root) {
    let res = []
    let stack = []
    let curr = root
    while(curr != null || stack.length > 0) {
        while(curr != null){
            res.push(curr.val)
            if(curr.right != null){
                stack.push(curr.right)
            }
            curr = curr.left
        }
        if(stack.length > 0){
            curr = stack.pop()
        }

    }
    return res
};
