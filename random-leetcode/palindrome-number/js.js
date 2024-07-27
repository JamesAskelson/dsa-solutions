var isPalindrome = function(x) {
    let s = String(x)
    if(s[0] == '-') {
        return false
    }
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] === s[right]){
            left++
            right--
        } else {
            return false
        }
    }

    return true
};
