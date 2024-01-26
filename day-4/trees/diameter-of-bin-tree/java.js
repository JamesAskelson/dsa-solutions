var diameterOfBinaryTree = function(root) {
    if(root == null){
        return 0
    }
    let max = 0

    var dfs = function(root){
        if(root == null){
            return 0;
        }

        let left = dfs(root.left)
        let right = dfs(root.right)
        console.log(left, right, max)
        max = Math.max(max, left+right)
        return Math.max(left, right) + 1
    }

    dfs(root)
    return max
};
