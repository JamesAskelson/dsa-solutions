/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */



var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let left = 0;
    let right = 0;

    for(let i = 0; i < sorted.length; i++) {
        let curr = sorted[i]
        sum += curr;
        sumArr.push(curr);
        if(sum >= target) {
            return sumArr.length;
        }
    }

    return 0;
};

var minSubArrayLen = function(target, nums) {
    nums.sort((a,b) => b-a)
    let sum = nums[0];

    if(sum >= target){
     return 1
    }

    console.log(nums)
    for(let i = 1; i < nums.length; i++){
        sum = sum + nums[i];
        console.log(sum)
        if(sum >= target){
             return nums.slice(0, i+1).length;
        }
    }

    return 0;
 };


 var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let sum = 0;
    let left = 0;

    for(let right = 0; right < nums.length; right++){
         sum = sum + nums[right]

         while(sum >= target){
             // make minLen the lower of the two
             minLen = Math.min(minLen, right-left+1)
             // then subtract the val at left from sum
             sum = sum - nums[left]
             // and then increment left
             left++
             // what this does is basically check the entire array, and when you get
             // to a point where the sum is more than target, you clip away at it from the
             // left, making the sub array smaller and smaller until the while loop conditional
             // fails
         }
    }

    return minLen === Infinity ? 0 : minLen
 };
