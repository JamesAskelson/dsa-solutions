var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while(low < high) {
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] > nums[high]){
            // if nums[mid] is more than nums[high], it means the
            // rotated minimum element must be to the right of mid,
            // so you make your new low = mid + 1 to search more on
            // the right side
            low = mid + 1
        } else {
            // if nums[mid] is less than nums[high], it means either
            // on the minimum, or the minimum is to the left, so you
            // high = mid so that the next iteration looks to the left
            // in the search
            high = mid
        }
    }
    return nums[low]
};
