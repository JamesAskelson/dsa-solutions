/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(i = 0; i < matrix.length; i++) {
        let currRow = matrix[i];
        for(j = 0; j < currRow.length; j++) {
            let currNum = currRow[j]
            if(currNum === target) {
                return true;
            }
        }
    }

    return false;
};



console.log(searchMatrix([[1]], 1))
