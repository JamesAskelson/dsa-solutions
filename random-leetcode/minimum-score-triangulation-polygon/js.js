var minScoreTriangulation = function(values) {
    function dfs(i, j){
        if(j - i < 2){
            return 0;
        }
        let min = Infinity;

        for(let k = i+1; k < j; k++){
            let sum = values[i]*values[k]*values[j] + dfs(i,k) + dfs(k,j)
            min = Math.min(min, sum)
        }

        return min
    }
    return dfs(0, values.length - 1)
};
