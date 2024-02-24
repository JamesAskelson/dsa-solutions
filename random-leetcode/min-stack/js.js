var MinStack = function() {
    this.stack = []
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = null;
    for(let i = 0 ; i < this.stack.length; i++){
        let curr = this.stack[i]
        if(curr < min){
            min = curr
        }
    }
    return min
};
