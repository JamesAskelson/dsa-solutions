var averageOfLevels = function(root) {
    let stack = [root]
    let res = []
    while(stack.length){
        let level = stack.length
        let levelSum = 0
        for(let i = 0; i < level; i++){
            let curr = stack.shift()
            levelSum += curr.val
            if(curr.left) {
                stack.push(curr.left)
            }
            if(curr.right) {
                stack.push(curr.right)
            }
        }
        res.push(levelSum/level)
    }
    return res
};
