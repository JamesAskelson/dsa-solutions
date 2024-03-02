var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] === target){
            return mid
        }

        if(nums[low] <= nums[mid]){
            //if low is less/equal to target and mid is more, then the target must be between mid and low, otherwise it must be to the right of mid instead
            if(nums[low] <= target && target < nums[mid]){
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            //if high is more/equal to target and target is more than mid, then it must be between mid and high, otherwise it must be to the left of mid
            if(nums[high] >= target && target > nums[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }

    return -1
};
