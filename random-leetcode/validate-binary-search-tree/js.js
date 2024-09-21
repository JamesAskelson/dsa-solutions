var isValidBST = function(root) {
    let prev = null
    var helper = function(node){
        if(node == null){
            return true
        }
        if(!helper(node.left)){
            return false
        }
        if(prev !== null && prev.val >= node.val){
            return false
        }
        prev = node
        return helper(node.right)
    }
    return helper(root);
};
