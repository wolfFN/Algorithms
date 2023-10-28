/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const board = new Array(9).fill(null);

    for (let i = 0; i < moves.length; i++) {
        const [row, column] = moves[i];
        board[row * 3 + column] = i % 2 === 0 ? 'A' : 'B';
    }
    // console.log(board);

    for (const win of winCases) {
        const user = board[win[0]];
        if (user && board[win[1]] === user && board[win[2]] === user) {
            return user;
        }
    }

    return moves.length === 9 ? 'Draw' : 'Pending';
};

console.log(
    tictactoe([
        [0, 0],
        [1, 1],
    ]),
);
