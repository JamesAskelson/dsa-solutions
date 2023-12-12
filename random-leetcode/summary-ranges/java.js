var summaryRanges = function(nums) {
    let res = []
    let range = []
    for(let i = 0; i < nums.length; i++){
        range.push(nums[i])
        if(nums[i] + 1 !== nums[i+1]){
            if(range.length === 1){
                res.push(`${range[0]}`)
            } else {
                res.push(`${range[0]}->${range[range.length - 1]}`)
            }
            range = []
        }
    }
    return res
};
