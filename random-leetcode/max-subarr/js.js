var maxSubArray = function(nums) {
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        // how this works is that if nums[i] is negative, you end up not changing anything as it ends up as 0 + nums[i]
        // if it is positive however, you will now have a larger value since it will be nums[i-1] + nums[i]
        // this leads to you getting the largest sum subarray as you will likely get a combo of positives that leads to that subarray
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];

        if(nums[i] > max){
            max = nums[i]
        }

    }
    return max
};
