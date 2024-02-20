var checkDistances = function(s, distance) {
    let set = new Set()

    for(let i = 0; i < s.length; i++){
        let letter = s[i]
        let distanceChar = letter.charCodeAt(0) - 97;

        if(!set.has(letter)) {
            let nextLetterIndex = s.indexOf(letter, i+1)
            let dist = nextLetterIndex - (i + 1)
            if(distance[distanceChar] !== dist){
                return false
            }
            set.add(letter)
        }
    }
    return true
};
