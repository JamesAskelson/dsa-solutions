var height = function(root) {
    if (root === null) {
        return -1;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
}
var isBalanced = function(root) {
    if(root === null) {
        return true
    }

    let left = height(root.left)
    let right = height(root.right)
    let leftCheck = isBalanced(root.left)
    let rightCheck = isBalanced(root.right)
    console.log(leftCheck, rightCheck)
    let diff = Math.abs(left - right)
    return diff < 2 && leftCheck && rightCheck
};
