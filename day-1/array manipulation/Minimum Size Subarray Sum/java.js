/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(target, nums) {
//     let sum = 0;
//     let sumArr = []
//     let sorted = nums.sort((a, b) => b - a);

//     for(let i = 0; i < sorted.length; i++) {
//         let curr = sorted[i]
//         sum += curr;
//         console.log('sum', sum)
//         sumArr.push(curr);
//         console.log('sumarr', sumArr)
//         if(sum >= target) {
//             return sumArr.length;
//         }
//     }

//     return 0;
// };




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

console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]))
