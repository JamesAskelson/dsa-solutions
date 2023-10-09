/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let strObj = {}
    let sortedWord = s.split('')
    for(let i = 0; i < sortedWord.length; i++) {
        if(strObj[sortedWord[i]]) {
            strObj[sortedWord[i]] += 1;
        } else {
            strObj[sortedWord[i]] = 1;
        }
    }

    let freqArr = [];
    for (const char in strObj) {
        frequency = strObj[char]
        freqArr.push({ char, frequency });
    }

    console.log(freqArr)

    // Step 2: Sort the array of objects by frequency in decreasing order
    freqArr.sort((a, b) => b.frequency - a.frequency);

    // Step 3: Build a new string
    let result = '';
    for (const item of freqArr) {
        result += item.char.repeat(item.frequency);
    }

    return result;
};


console.log(frequencySort('Aabb'))
