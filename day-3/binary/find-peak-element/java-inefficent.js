var findPeakElement = function(nums) {
    if(nums.length < 2){
        return 0
    }
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        let prev = nums[i-1]
        let next = nums[i+1]
        if(curr > next && curr > prev) {
            return i
        } else if((prev === undefined && curr > next) || (next === undefined && curr > prev)){
            return i
        }
    }
}
