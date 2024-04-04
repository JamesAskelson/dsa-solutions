var merge = function(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }
    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedInt = intervals[0];


    for (let i = 1; i < intervals.length; i++){
        let interval = intervals[i]

        if(interval[0] <= mergedInt[1]) {
            mergedInt[1] = Math.max(mergedInt[1], interval[1])
        } else {
            merged.push(mergedInt);
            mergedInt = interval
        }
    }

    merged.push(mergedInt)

    return merged
};

var merge = function(intervals) {
    let res = []
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedInt = intervals[0]

    for(let i = 1; i < intervals.length; i++){

        if(mergedInt[1] >= intervals[i][0]){
            mergedInt[1] = Math.max(intervals[i][1], mergedInt[1])
        } else {
            res.push(mergedInt)
            mergedInt = intervals[i]
        }
    }

    res.push(mergedInt)
    return res
};
