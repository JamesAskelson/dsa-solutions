var isValid = function(s) {
    let stack = []
    for(let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (!stack.length || (char === ')' && stack[0] !== '(') || (char === ']' && stack[0] !== '[') || (char === '}' && stack[0] !== '{')) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length
};


