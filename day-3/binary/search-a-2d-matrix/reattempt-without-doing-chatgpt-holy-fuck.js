var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let low = 0;
    let high = rows * cols - 1;

    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let midRow = Math.floor(mid / cols)
        let midCol = Math.floor(mid % cols)
        if(matrix[midRow][midCol] === target){
            return true
        } else {
            if(matrix[midRow][midCol] > target){
                high--
            } else {
                low++
            }
        }
    }

    return false

};
