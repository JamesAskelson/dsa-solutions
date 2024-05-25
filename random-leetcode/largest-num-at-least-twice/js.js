var dominantIndex = function(nums) {
    let largest = 0
    let index = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i]
            index = i
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i]*2 > largest && nums[i] !== largest){
            return -1
        }
    }

    return index
};
