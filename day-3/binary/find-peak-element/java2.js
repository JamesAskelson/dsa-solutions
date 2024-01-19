var findPeakElement = function(nums) {
    if(nums.length < 2){
        return 0
    }

    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let curr = nums[mid]
        let prev = nums[mid-1]
        let next = nums[mid+1]
        if((curr > next && curr > prev) || (prev === undefined && curr > next) || (next === undefined && curr > prev)) {
            return mid
        } else if (curr < next){
            low++
        } else {
            high--
        }
    }
}
