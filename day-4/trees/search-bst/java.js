var searchBST = function(root, val) {
    if(root === null) {
        return null
    }

    if(root.val === val){
        return root
    } else {
        let leftSearch = searchBST(root.left, val)
        let rightSearch = searchBST(root.right, val)
        if(leftSearch !== null) {
            return leftSearch
        } else {
            return rightSearch
        }
    }
};
