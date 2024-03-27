var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((a,b) => a - b)

    let backtrack = function(cands, index, sum){
        if(sum > target){
            return
        }
        if(sum == target){
            res.push(cands)
            return
        }

        for(let i = index; i < candidates.length; i++){
            if(i != index && candidates[i] == candidates[i-1]){
                continue;
            }
            backtrack(cands.concat(candidates[i]), i+1, sum+candidates[i])
        }

    }

    backtrack([], 0, 0)
    return res
};
