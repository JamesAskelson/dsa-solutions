var pivotIndex = function(nums) {
    let total = nums.reduce((a,b) => a+b, 0);
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++){
        let rightSum = total - leftSum - nums[i]
        console.log(rightSum, leftSum)
        if(rightSum == leftSum){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};
