var simplifyPath = function(path) {
    let array = path.split('/')
    let stack = [];
    for(let dir of array){
        console.log(stack)
        if(dir === '.' || !dir){
            //if its ., you just ignore
            continue;
        } else if(dir === '..') {
            if(stack.length > 0){
                // means if you have a .., you go back a directory (ie whatever is at the end of the stack)
                stack.pop()
            }
        } else {
            // push into stack
            stack.push(dir)
        }
    }
    // join it all back together, including every / that matters
    return '/' + stack.join('/')
};
