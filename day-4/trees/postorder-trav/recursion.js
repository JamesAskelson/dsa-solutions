var postorderTraversal = function(root) {
    let res = []
    var helper = function(root, res) {
    if(root != null) {
        helper(root.left, res)
        helper(root.right, res)
        res.push(root.val)
    }

    }
    helper(root, res)
    return res
};
