let sortColors = (nums) => {
    let low = 0;
    let high = nums.length - 1
    let i = 0;
    while (i <= high) {
        if(nums[i] === 0) {
            let tmp = nums[i]
            nums[i] = nums[low]
            nums[low] = tmp
            low++;
            i++;
        } else if (nums[i] === 2) {
            let tmp = nums[i]
            nums[i] = nums[high]
            nums[high] = tmp
            high--;
        } else {
            i++
        }
    }

    return nums
}
