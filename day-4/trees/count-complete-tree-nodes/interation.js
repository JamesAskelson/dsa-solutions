var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    let count = 0;
    let queue = []

    queue.push(root)

    while(queue.length > 0) {
        const current = queue.shift();
        count++
        if(current.left) {
            queue.push(current.left)
        }

        if(current.right) {
            queue.push(current.right)
        }
    }

    return count;
};
