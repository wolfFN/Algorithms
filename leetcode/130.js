/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (!board.length || !board[0].length) {
        return board;
    }

    const m = board.length;
    const n = board[0].length;

    const bfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
            return;
        }

        board[i][j] = 'W';
        bfs(i + 1, j);
        bfs(i - 1, j);
        bfs(i, j - 1);
        bfs(i, j + 1);
    };

    for (let i = 0; i < n; i++) {
        bfs(0, i);
        bfs(m - 1, i);
    }

    for (let i = 1; i < m - 1; i++) {
        bfs(i, 0);
        bfs(i, n - 1);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'W') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }

    // console.log(marked);
    return board;
};