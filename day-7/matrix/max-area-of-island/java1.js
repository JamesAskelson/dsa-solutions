function getNeighbors(row, col, grid) {
    let moves = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
        ]

    return moves.filter(([row, col]) => {
        if (grid[row] && grid[row][col]) {
            return true
        }
        return false;
    })
}

function maxAreaOfIsland(grid) {
    const visited = new Set();
    const stack = [];

    let max = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (!visited.has([row, col].toString()) && grid[row][col] === 1) {

                let currentArea = 0;

                stack.push([row, col]);
                visited.add([row, col].toString());

                while (stack.length) {

                    const [row, col] = stack.pop();
                    currentArea++;
                    const neighbors = getNeighbors(row, col, grid);

                    neighbors.forEach((neighbor) => {

                        if (!visited.has(neighbor.toString())) {
                            stack.push(neighbor);
                            visited.add(neighbor.toString());
                        }
                    });

                }
                max = Math.max(max, currentArea);
            }
        }
    }
    return max;
}
