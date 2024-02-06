var permute = function(nums) {
    let res = []

    let backtrack = function(i){
        // if i === nums length, then you have a completely permutation
        if(i === nums.length){
            res.push([...nums])
            return
        }
        // for each j, swap the values in num, backtrack for that permutation, and then change them back
        for(let j=i; j < nums.length; j++){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            backtrack(i+1);
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    backtrack(0)
    return res
};
