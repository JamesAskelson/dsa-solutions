/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums)
    let max = 0;

    for(let num of numSet) {
        if(!numSet.has(num - 1)) {
            let currentNum = num;
            let currLen = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currLen += 1;
            }


            max = Math.max(max, currLen)
        }
    }
    return max
};

var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0
    }

    let set = new Set(nums)
    let max = 1;
    for(let i = 0; i < nums.length; i++){

        if(!set.has(nums[i]-1)){
            let count = 1
            let val = nums[i]
            while(set.has(val+1)){
                count++
                val++
            }
            max = Math.max(max, count)
        }

    }
    return max
};
