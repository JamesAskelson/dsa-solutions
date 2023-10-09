var exist = function(board, word) {
    word = word.split('')

    function backtrack(x, y, index){
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) {
            return false; // Out of bounds
        }

        if(word.length === index) {
            return true;
        }
        if(board[x][y] !== word[index]){
            return false;
        }


        const originalChar = board[x][y];
        board[x][y] = null;

        const found = (
            backtrack(x+1, y, index+1) ||
            backtrack(x-1, y, index+1) ||
            backtrack(x, y+1, index+1) ||
            backtrack(x, y-1, index+1)
        )

        board[x][y] = originalChar

        return found
    }

    backtrack(0, 0, 0)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) {
                return true; // Word found
            }
        }
    }

    return false;
};
