var longestPalindrome = function(s) {
    let max = 0;
    let sub = ''
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j <= s.length; j++){
            let slice = s.slice(i,j)
            if(isPalindrom(slice) && slice.length > max){
                max = slice.length
                sub = slice
            }
        }
    }


    function isPalindrom(sub){
        let i = 0;
        let j = sub.length-1;
        while(i < j){
            if(sub[i] !== sub[j]){
                return false
            }
            i++;
            j--;
        }
        return true
    }

    return sub;
};
console.log(longestPalindrome("babad"))
