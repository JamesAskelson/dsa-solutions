var setZeroes = function(matrix) {
    let rows = []
    let cols = []

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                rows.push(i)
                cols.push(j)
            }
        }
    }
    // 1 1 1
    // 1 0 1
    // 1 1 1

    for(let i = 0; i < rows.length; i++) {
        for(let j = 0; j < matrix[0].length; j++){
            matrix[rows[i]][j] = 0
        }
    }
    // 1 1 1
    // 0 0 0
    // 1 1 1

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < cols.length; j++){
            matrix[i][cols[j]] = 0
        }
    }

    // 1 0 1
    // 0 0 0
    // 1 0 1

    return matrix
};
