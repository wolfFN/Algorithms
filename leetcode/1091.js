/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const N = grid.length;
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ];

    if (grid[0][0] === 1) {
        return -1;
    }

    const queue = [[0, 0, 1]];

    while (queue.length) {
        const [row, column, path] = queue.shift();
        if (row === N - 1 && column === N - 1) {
            return path;
        }

        for (const [dx, dy] of directions) {
            const x = row + dx;
            const y = column + dy;
            if (x < 0 || x >= N || y < 0 || y >= N || grid[x][y] === 1) {
                continue;
            }
            queue.push([x, y, path + 1]);
            grid[x][y] = 1;
        }
    }
    return -1;
};

// console.log(
//     shortestPathBinaryMatrix([
//         [0, 1],
//         [1, 0],
//     ]),
// );
// console.log(
//     shortestPathBinaryMatrix([
//         [
//             [0, 0, 0],
//             [1, 1, 0],
//             [1, 1, 0],
//         ],
//     ]),
// );

// console.log(
//     shortestPathBinaryMatrix([
//         [1, 0, 0],
//         [1, 1, 0],
//         [1, 1, 0],
//     ]),
// );
console.log(
    shortestPathBinaryMatrix([
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1],
        [1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
    ]),
);
