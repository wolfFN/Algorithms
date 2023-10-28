/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
    const LENGTH = 3;
    let xCount = 0,
        oCount = 0;
    for (let i = 0; i < LENGTH; i++) {
        for (let j = 0; j < LENGTH; j++) {
            if (board[i][j] === 'X') {
                xCount++;
            } else if (board[i][j] === 'O') {
                oCount++;
            }
        }
    }

    if (oCount !== xCount && oCount !== xCount - 1) {
        return false;
    }

    const winner = new Set();

    for (let i = 0; i < LENGTH; i++) {
        if (
            (board[i][0] === 'X' || board[i][0] === 'O') &&
            board[i][0] === board[i][1] &&
            board[i][0] === board[i][2]
        ) {
            winner.add(board[i][2]);
        }

        if (
            (board[0][i] === 'X' || board[0][i] === 'O') &&
            board[0][i] === board[1][i] &&
            board[0][i] === board[2][i]
        ) {
            winner.add(board[2][i]);
        }
    }

    if (
        (board[0][0] === 'X' || board[0][0] === 'O') &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2]
    ) {
        winner.add(board[2][2]);
    }
    if (
        (board[0][2] === 'X' || board[0][2] === 'O') &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]
    ) {
        winner.add(board[0][2]);
    }

    if (winner.length > 1) {
        return false;
    }
    if (winner.has('O') && oCount < xCount) {
        return false;
    }
    if (winner.has('X') && oCount === xCount) {
        return false;
    }

    return true;
};
