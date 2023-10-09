var generateParenthesis = function(n) {
    let res = []
    if(n === 1){
        return ["()"]
    }

    function backtrack(str, opened, closed){
        if(opened > n || closed > n || closed>opened){
            return;
        }
        if(str.length == 2*n && opened == closed) {
            res.push(str)
        }
        backtrack(str + '(', opened+1, closed)
        backtrack(str + ')', opened, closed+1)
    }

    backtrack('', 0, 0)
    return res
};
