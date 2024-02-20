var subsets = function(nums) {
    let res = []
    let set = new Set()


    let backtracking = function(array, index){
        if(nums.length < index){
            return 0
        }

        if(!set.has(array)) {
            res.push(array)
            set.add(array)
        }

        backtracking(array, index + 1)
        backtracking(array.concat(nums[index]), index + 1)
    }

    backtracking([], 0)

    return res
};
