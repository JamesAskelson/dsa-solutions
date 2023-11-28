var isSubsequence = function(s, t) {
    let index = 0;
    if(s === t){
        return true;
    }
    for(let i = 0; i < t.length; i++){
        let sLet = s[index]
        let tLet = t[i]
        if(sLet === undefined){
            return true
        }
        if(tLet === sLet){
            index++;
            if(s[index] === undefined){
            return true
            }
        }
    }
    return false;
};

var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}
