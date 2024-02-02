var countNodes = function(root) {
    let count = 0;

    let helper = function(root) {
        if(root == null){
            return count
        }
        count++
        if(root?.left){
            helper(root?.left)
        }
        if(root?.right){
            helper(root?.right)
        }
    }
    helper(root)
    return count;
};
