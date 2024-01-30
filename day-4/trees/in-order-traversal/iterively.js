var inorderTraversal = function(root) {
    let res = []
    let stack = []
    let curr = root;
    while(curr != null || stack.length > 0) {
        while(curr != null){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }
    return res
};
