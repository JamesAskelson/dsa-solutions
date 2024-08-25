var findErrorNums = function(nums) {
    let i = 1;
    let targetSum = 0;
    let sum = 0;
    while(i <= nums.length) {
        targetSum += i
        i++
    }

    let set = new Set()
    let dupe = 0;

    for(let j = 0; j < nums.length; j++){
        let curr = nums[j]
        if(set.has(curr)){
            dupe = curr
        } else {
            set.add(curr)
        }

        sum += curr
    }

    if(targetSum > sum){
        let diff = targetSum - sum
        return [dupe, dupe+diff]
    } else {
        let diff = sum - targetSum
        return [dupe, dupe-diff]
    }
};

var findErrorNums = function(nums) {
    let i = 1;
    let targetSum = 0;
    let sum = 0;
    while(i <= nums.length) {
        targetSum += i
        i++
    }

    let set = new Set()
    let dupe = 0;

    for(let j = 0; j < nums.length; j++){
        let curr = nums[j]
        if(set.has(curr)){
            dupe = curr
        } else {
            set.add(curr)
        }

        sum += curr
    }

    if(targetSum > sum){
        let diff = targetSum - sum
        return [dupe, dupe+diff]
    } else {
        let diff = sum - targetSum
        return [dupe, dupe-diff]
    }
};
