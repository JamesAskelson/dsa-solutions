var MyStack = function() {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.unshift(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.unshift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.stack.length > 0){
        return false
    } else {
        return true
    }
};
