var searchRange = function(nums, target) {

    const binarySearch = (nums, target, isSearchingLeft) => {
        let low = 0;
        let high = nums.length - 1;
        let index = -1;

        while(low <= high){
            let mid = Math.floor((low + high) / 2)

            if(nums[mid] > target){
                high = high - 1
            } else if (nums[mid] < target){
                low = low + 1
            } else {
                // we currently know that the current mid is the target
                index = mid
                if(isSearchingLeft){
                    // if isSearchingLeft is true, you start looking to the left of the current,
                    // which is the target
                    high = mid - 1;
                } else {
                    // if isSearchingLeft is false, you start looking to the right of the current,
                    // which is the target
                    low = mid + 1
                }
            }
        }
        return index
    }

    let left = binarySearch(nums, target, true)
    let right = binarySearch(nums, target, false)
    return [left, right]
};

var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1
    while(left <= right){
        if(nums[left] === target && nums[right] === target){
            return [left, right]
        }
        if(nums[left] < target){
            left++
        }
        if(nums[right] > target){
            right--
        }

    }
    return [-1, -1]
};
