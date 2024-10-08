var rob = function(nums) {
    let houses = nums.length;
    if(houses < 2){
        return nums[0]
    }
    let dp = Array(houses).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])

    for(let i = 2; i < houses; i++){
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
    }
    return dp[houses-1]
};
