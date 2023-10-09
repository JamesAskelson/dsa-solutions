var sortArray = function(nums) {
    // If the array is length 1 or less, return
    if (nums.length <= 1) return nums;

  // Find and remove the largest value in the array
    let maxIndex = 0;
    for (let i = 1 ; i < nums.length ; i++) {
        if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    const maxValue = nums[maxIndex];
    nums.splice(maxIndex, 1);

  // Sort the remaining elements
    nums = sortArray(nums);

  // Put the largest value back at the end of the array
    nums.push(maxValue);

    return nums;
};
