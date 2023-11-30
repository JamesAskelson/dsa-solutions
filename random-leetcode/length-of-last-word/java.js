var lengthOfLastWord = function(s) {
    let sLower = s.toLowerCase();
    let sArr = sLower.split(' ')
    console.log(sArr)
    for(let i = sArr.length -1; i >= 0; i--){
        let curr = sArr[i]
        if(curr !== ''){
           return curr.length
        }
    }
};

var lengthOfLastWord = function(s) {
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--){

        let curr = s[i]
        console.log(curr, count)
        if(curr !== ' '){
            count++
        }
        if(curr === ' ' && count !== 0){
            return count
        }
    }
    return count
};

var lengthOfLastWord = function(s) {
    let sTrim = s.trim()
    let sArr = sTrim.split(' ')
    let last = sArr.pop().length
    return last
};
