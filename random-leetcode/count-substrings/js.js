var countSubstrings = function(s) {
    let length = s.length;
    let count = 0;

    isPalindrome = (low, high) => {
        if(s[low++] !== s[high--]){
            return false
        }
        return true
    }

    for(let i = 0; i < length; i++){
        for(let j = i; j < length; j++){
            if(isPalindrome(i, j)){
                count++
            }
        }
    }

    return count

};
