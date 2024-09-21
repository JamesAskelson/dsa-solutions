var recoverTree = function(root) {
    let small = null, big = null, prev = null;
    let helper = function(node){
        if(node === null) return;
        helper(node.left);
        if(prev && prev.val > node.val){
            small = node;
            if(big) return;
            big = prev;
        }
        prev = node;
        helper(node.right);
        return;
    }

    helper(root);
    [small.val, big.val] = [big.val, small.val]
};
