var findRepeatedDnaSequences = function(s) {
    let set = new Set()
    let res = []
    let left = 0;
    let right = 9;
    while(right < s.length){
        let sequence = s.slice(left, right+1)
        if(set.has(sequence) && !res.includes(sequence)){
            res.push(sequence)
        } else {
            set.add(sequence)
        }
        left++
        right++
    }
    return res
};
