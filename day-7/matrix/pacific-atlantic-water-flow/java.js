function getNeighbors(heights, row, col) {
    let moves = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
        ]

    return moves.filter(([r, c]) => {

        if (r >= 0 && r < heights.length && c >= 0 && c < heights[0].length && heights[row][col] >= heights[r][c]) {
            return true
        }
        return false;
    })
}

var pacificAtlantic = function(heights) {

    const result = []

    for(let r = 0; r < heights.length; r++) {
      let row = heights[r]
      for(let c = 0; c < row.length; c++) {

        let visited = new Set()

        let startCoords = [r,c]
        visited.add(startCoords.toString())

        let stack = [startCoords];

        let touchedAtlBottom = false
        let touchedAtlRight = false
        let touchedPacTop = false
        let touchedPacLeft = false

        while(stack.length >= 1) {
          const curr = stack.pop()
          const [row, col] = curr

          if(row === heights.length - 1) touchedAtlBottom = true
          if(col === heights[0].length - 1) touchedAtlRight = true
          if(row === 0) touchedPacTop = true
          if(col === 0) touchedPacLeft = true

          const neighbors = getNeighbors(heights, row, col)
          for(let n of neighbors) {
            if(!visited.has(n.toString())) {
              visited.add(n.toString())
              stack.push(n)
            }

          }
        }

        if( (touchedAtlBottom && touchedPacTop) ||
            (touchedAtlBottom && touchedPacLeft) ||
            (touchedAtlRight && touchedPacTop) ||
            (touchedAtlRight && touchedPacLeft)
         ) {
           result.push(startCoords)
         }

      }

    }

    return result
};
