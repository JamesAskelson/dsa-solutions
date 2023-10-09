var isAnagram = function(s, t) {
    let word = t.split('')
    if(s.length !== t.length) return false
    for(let i = 0; i < s.length; i++){
        let curr = s[i]
        let letter = word.indexOf(curr)
        console.log(letter)
        if(letter !== -1){
            word.splice(letter, 1)
        } else {
            return false
        }
    }
    return true
};
