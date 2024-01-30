var inorderTraversal = function(root) {
    let result = []

    var helper = function(root, result) {
    if(root != null){
        helper(root.left, result)
        result.push(root.val)
        helper(root.right, result)
    }
}
    helper(root, result)
    return result
};
