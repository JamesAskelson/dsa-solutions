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


nums2 = [100,4,200,1,3,2]

console.log(longestConsecutive(nums2))
