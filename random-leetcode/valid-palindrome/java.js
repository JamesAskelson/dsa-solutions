var isPalindrome = function(s) {
    let string = []
    let revstr = []
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let num = '1234567890'
    s = s.toLowerCase()
    for(let i = 0; i < s.length; i++){
        if(alpha.includes(s[i]) || num.includes(s[i])){
            string.push(s[i])
            revstr.unshift(s[i])
        }
    }

    let res1 = string.join('')
    let res2 = revstr.join('')
    if(res1 === res2){
        console.log(res1, res2)
        return true
    } else {
        console.log(res1, res2)
        return false
    }

};
