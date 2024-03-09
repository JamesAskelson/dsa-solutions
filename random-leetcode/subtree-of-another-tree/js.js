var isSubtree = function(root, subRoot) {
    let stack = [root]

    while(stack.length > 0){
        let curr = stack.pop()
        console.log(curr, subRoot)
        if(isSame(curr, subRoot)){
            return true
        }
        if(curr.left) {
            stack.push(curr.left)
        }
        if(curr.right){
            stack.push(curr.right)
        }
    }

    return false
};

let isSame = function(p, q) {
    if(!p && !q) {
        return true
    }
    if(!p || !q || p.val !== q.val) {
        return false
    }
    return isSame(p.left, q.left) && isSame(p.right, q.right)
}
