var maxSubArray = function(nums) {
    let res = -Infinity
    let maxSum = 0

    for(let i = 0; i < nums.length; i++){
        maxSum += nums[i]
        if(maxSum > res){
            res = maxSum
        }
        if(maxSum < 0){
            maxSum = 0
        }
    }
    return res
}
