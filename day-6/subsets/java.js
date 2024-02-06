var subsets = function(nums) {
    let res = []

    let backtrack = function(path, index) {
        if(index >= nums.length) {
            res.push(path.slice())
            return
        }
        backtrack(path, index + 1); // exclude current element
        backtrack(path.concat(nums[index]), index + 1); // include current element
    }

    backtrack([], 0)
    return res
};
