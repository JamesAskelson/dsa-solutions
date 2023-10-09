var isAnagram = function(s, t) {
    let word = t.split('')
    if(s.length !== t.length) return false
    let freqS = {}
    let freqT = {}

    for(let char of s){
        if(freqS[char]){
            freqS[char] += 1;
        } else {
            freqS[char] = 1;
        }
    }
    for(let char of t){
        if(freqT[char]){
            freqT[char] += 1;
        } else {
            freqT[char] = 1;
        }
    }

    for(let char in freqS){
        if(freqS[char] !== freqT[char]){
            return false
        }
    }
    return true
};
