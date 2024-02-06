var combinationSum = function(candidates, target) {
    let res = [];
    let set = new Set()

    let backtracking = function(curr, index) {
        let total = 0;
        if (index >= candidates.length) {
            return;
        }
        for (let num of curr) {
            total = total + num;
        }

        if (total === target && !set.has(curr)) {
            res.push(curr);
            set.add(curr)
        }

        // Include the current candidate and recurse
        if (total <= target) {
            backtracking(curr.concat(candidates[index]), index);
        }

        // Skip the current candidate and recurse
        backtracking(curr, index + 1);
    };

    backtracking([], 0);
    return res;
};
