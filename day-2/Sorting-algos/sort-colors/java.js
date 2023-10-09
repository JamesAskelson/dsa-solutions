/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    const sortedLeft = sortColors(left);
    const sortedRight = sortColors(right);

    return [...sortedLeft, pivot, ...sortedRight];
}


console.log(sortColors([2,0,1]))
