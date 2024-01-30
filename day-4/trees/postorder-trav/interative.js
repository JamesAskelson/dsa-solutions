var postorderTraversal = function(root) {
    if(!root){
        return []
    }
    let res = []
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        if(root.left) stack.push(root.left)
        if(root.right) stack.push(root.right)
        res.unshift(root.val)
    }

    return res
};
