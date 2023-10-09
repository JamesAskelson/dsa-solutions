/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // Get the number of rows and columns in the matrix
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Initialize low and high pointers for binary search
    let low = 0;
    let high = numRows * numCols - 1;

    // Perform binary search
    while (low <= high) {
        // Calculate the middle index
        const mid = Math.floor((low + high) / 2);

        // Calculate the row and column of the middle element
        const row = Math.floor(mid / numCols);
        const col = mid % numCols;
 
        // Get the value at the middle element
        const midValue = matrix[row][col];

        // Check if the middle element is equal to the target
        if (midValue === target) {
            return true; // Found the target, return true
        } else if (midValue < target) {
            low = mid + 1; // Adjust the low pointer
        } else {
            high = mid - 1; // Adjust the high pointer
        }
    }

    // If the target is not found, return false
    return false;
};



console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 1))
