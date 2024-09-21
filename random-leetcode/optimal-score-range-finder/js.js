let optimalScoreRangeFinder = function(nums,k) {
    if(k == 1 || nums.length < 2) return 0;

    let minimum = Infinity;
    nums = nums.sort()
    l = 0
    r = k-1
    while(r < nums.length){
        let diff = nums[r] - nums[l]
        if(diff < minimum) minimum = diff
        l = l+1
        r = r+1
    }
    return minimum
}
