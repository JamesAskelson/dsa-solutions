var topKFrequent = function(nums, k) {
    let count = {}
    let res = []
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(!count[num]) {
            count[num] = 1;
        } else {
            count[num] += 1;
        }
    }

    let freqArr = Object.entries(count)
    freqArr.sort((a, b) => b[1] - a[1]);
    console.log(freqArr)

    for(let i = 0; i < k; i++){
        const curr = freqArr[i]
        res.push(curr[0])
    }
    return res
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))

var topKFrequent = function(nums, k) {
    let count = {}
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(!count[nums[i]]){
            count[nums[i]] = 1
        } else {
            count[nums[i]]++
        }
    }

    let countArr = Object.entries(count)
    countArr.sort((a,b) => b[1] - a[1])
    console.log(countArr)

    for(let i = 0 ; i < k; i++){
        res.push(countArr[i][0])
    }


    return res
};
