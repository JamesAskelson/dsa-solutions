var generateParenthesis = function(n) {
    let res = []
    if(n === 1) {
        return ["()"]
    }
    let helper = function(str, opened, closed) {
        if(closed > n || opened > n || closed > opened) {
            return
        }
        if(str === 2*n && closed === opened) {
            res.push(str)
        }
        helper(str + '(', opened+1, closed)
        helper(str + ')', opened, closed+1)
    }
    helper('', 0, 0)
    return res
};
