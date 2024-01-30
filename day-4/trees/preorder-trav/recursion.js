var preorderTraversal = function(root) {
    let res = []


    var helper = function(root, res) {
    if(root != null) {
        res.push(root.val)
        helper(root.left, res)
        helper(root.right, res)
    }
}
    helper(root, res)
    return res
};
