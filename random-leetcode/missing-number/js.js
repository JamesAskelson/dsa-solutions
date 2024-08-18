var missingNumber = function(nums) {
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }

    let len = nums.length;
    let total = (len*(len+1))/2
    console.log(total)
    return total - sum
};
