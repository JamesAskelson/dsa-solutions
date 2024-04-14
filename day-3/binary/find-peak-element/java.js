/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1){
        return 0;
    }

    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) /2);
        const midVal = nums[mid]
        if((mid === 0 || midVal > nums[mid - 1]) && (mid === nums.length - 1 || midVal > nums[mid + 1])) {
            return mid
        } else if (midVal < nums[mid+1]) {
            low = mid + 1;
        } else {
            high = mid - 1
        }
    }
};

console.log(findPeakElement([2,1]))

var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high) / 2)
        if((mid === 0 || nums[mid] > nums[mid-1]) && (mid === nums.length - 1 || nums[mid] > nums[mid+1])){
            return mid
        } else if(nums[mid] > nums[mid+1]){
            high = mid - 1
        } else {
            low = mid + 1
        }

    }
}
