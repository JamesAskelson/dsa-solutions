function getNeighbors(row, col, grid) {
    let moves = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    // Return neighbors
    return moves.filter(([r, c]) => {
      if (r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1) {
        return true;
      }
      return false;
    });
  }

  var orangesRotting = function (grid) {
    let time = 0; // Initialize time to 0
    const queue = [];
    const visited = new Set();

    for (let r = 0; r < grid.length; r++) {
      let row = grid[r];
      for (let c = 0; c < row.length; c++) {
        if (!visited.has([r, c].toString()) && grid[r][c] === 2) {
          queue.push([r, c]);
          visited.add([r, c].toString());
        }
      }
    }

    // Check if there are no initial rotten oranges
    if (queue.length === 0) {
      for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
          if (grid[r][c] === 1) {
            return -1; // There are still fresh oranges and no initial rotten oranges
          }
        }
      }
      return 0; // There are no fresh oranges to begin with
    }

    while (queue.length > 0) {
      let levelSize = queue.length;

      while (levelSize > 0) {
        const [row, col] = queue.shift();
        const neighbors = getNeighbors(row, col, grid);

        neighbors.forEach((neighbor) => {
          if (!visited.has(neighbor.toString())) {
            grid[neighbor[0]][neighbor[1]] = 2; // Update the neighbor to a rotten orange
            queue.push(neighbor);
            visited.add(neighbor.toString());
          }
        });

        levelSize--;
      }

      time++;
    }

    // After processing all oranges, check if there are any fresh oranges left
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] === 1) {
          return -1; // There are still fresh oranges left
        }
      }
    }

    return time - 1; // Return the number of minutes it took to rot all oranges
  };
