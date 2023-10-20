// peusdocode
// iterate thru the matrix row by row, looking at every index
// check if its a 0, if so leave it
// if it's a 1, do a look to see if theres any 0's neighbors
// if theres none, do a new check on those neighbors until you reach a 0
// Define a function to get neighboring cells from a given position (row, col) in a grid
function getNeighbors(row, col, grid) {

    let moves = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
    ];


    return moves.filter(([row, col]) => {
        if (grid[row] && grid[row][col]) {
            return true;
        }
        return false; 
    });
}

// Define a function to update a matrix with distance values based on 0's in the input matrix
var updateMatrix = function(mat) {
    const visited = new Set();  // Create a set to keep track of visited cells
    const rows = mat.length;     // Get the number of rows in the input matrix
    const cols = mat[0].length;  // Get the number of columns in the input matrix
    const queue = [];           // Create a queue for BFS (Breadth-First Search)
    const res = new Array(rows).fill(0).map(() => new Array(cols).fill(-1)); // Create a result matrix filled with -1 values

    // Initialize the queue and result matrix with starting points (0's)
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]);        // Add the starting point to the queue
                visited.add([r, c].toString()); // Mark it as visited in the set
                res[r][c] = 0;             // Set the result matrix value to 0 for starting points
            }
        }
    }

    // Perform BFS to compute the distances from 0's to other cells
    while (queue.length) {
        const [row, col] = queue.shift();  // Dequeue the current cell
        const neighbors = getNeighbors(row, col, mat); // Get valid neighboring cells

        // Loop through the neighbors
        for (const [r, c] of neighbors) {
            if (!visited.has([r, c].toString())) {
                // If the cell is not visited, set its distance in the result matrix
                res[r][c] = res[row][col] + 1; // Update the distance
                queue.push([r, c]);            // Add the cell to the queue
                visited.add([r, c].toString()); // Mark it as visited
            }
        }
    }

    return res; // Return the result matrix with distance values
};

console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]))
