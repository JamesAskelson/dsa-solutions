var reverseString = function(s) {
    let str = '';
    for(let i = s.length(); i >= 0; i--){
        str += s[i]
    }
    return str
}
