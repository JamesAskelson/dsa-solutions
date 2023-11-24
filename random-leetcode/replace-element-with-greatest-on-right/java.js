var replaceElements = function(arr) {

    if(arr.length === 1) return [-1]
    const result = []

    for(let i = 0; i < arr.length; i++) {
        if( i === arr.length - 1) {
            result.push(-1)
            return result
        }
        let currHighest = -10000
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= currHighest) {
                currHighest = arr[j]
            }
        }
        result.push(currHighest)
    }
};
