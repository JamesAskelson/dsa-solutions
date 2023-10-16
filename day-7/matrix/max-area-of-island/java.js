function maxAreaOfIsland(grid) {
    const rowMoves = [-1, 1, 0, 0];
    const colMoves = [0, 0, -1, 1];

    let maxArea = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                let currentArea = 0;
                const stack = [[row, col]];

                while (stack.length > 0) {
                    const [r, c] = stack.pop();

                    if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
                        grid[r][c] = 0; // Mark cell as visited
                        currentArea++;

                        for (let i = 0; i < 4; i++) {
                            const newRow = r + rowMoves[i];
                            const newCol = c + colMoves[i];
                            stack.push([newRow, newCol]);
                        }
                    }
                }

                maxArea = Math.max(maxArea, currentArea);
            }
        }
    }

    return maxArea;
}
