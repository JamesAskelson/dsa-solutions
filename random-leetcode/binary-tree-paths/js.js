var binaryTreePaths = function(root) {
    let paths = []

    let backtrack = function(tree, path){
        if(!tree){
            return;
        }
        // push the val of your backtrack stack to the path
        path.push(tree.val.toString())

        if(!tree.left && !tree.right){
            // if you hit the end, push the path to the overall paths, adding the -> between each
            paths.push(path.join('->'))
        } else {
            // else continue to backtrack
            backtrack(tree.left, path.slice())
            backtrack(tree.right, path.slice())
        }
    }

    backtrack(root, [])
    return paths
};
