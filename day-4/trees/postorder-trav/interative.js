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

var postorderTraversal = function(root) {
    if(!root) return []
    let stack = [root]
    let res = []
    
    while(stack.length){

        let node = stack.pop()
        res.unshift(node.val)
        if(node.right){
            stack.push(node.right)
        }
        if(node.left) {
            stack.push(node.left)
        }
    }

    return res
};
