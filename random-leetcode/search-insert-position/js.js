var searchInsert = function(nums, target) {
    if(target < nums[0]){
        return 0
    }

    if(target > nums[nums.length - 1]){
        return nums.length
    }

    for(let i = 0; i < nums.length; i++){
        console.log(nums[i], target, i)
        if(nums[i] === target){
            return i
        } else if(nums[i] > target && i != 0){
            return i
        } else if(nums[i] < target && i == nums.length - 1){
            return nums.length
        }
    }
};
