/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    const n = grid[0].length;
    const result = [];
    for (let j = 0; j < n; j++) {
        result.push(dfs(grid, 0, j));
    }
    return result;
};

const dfs = (grid, i, j) => {
    const m = grid.length,
        n = grid[0].length;
    // console.log(i, j);
    if (i === m) {
        return j;
    }

    if (
        (grid[i][j] === 1 && (j === n - 1 || grid[i][j + 1] === -1)) ||
        (grid[i][j] === -1 && (j === 0 || grid[i][j - 1] === 1))
    ) {
        return -1;
    }

    return dfs(grid, i + 1, j + grid[i][j]);
};

console.log(
    findBall([
        [1, 1, 1, -1, -1],
        [1, 1, 1, -1, -1],
        [-1, -1, -1, 1, 1],
        [1, 1, 1, 1, -1],
        [-1, -1, -1, -1, -1],
    ]),
);
console.log(findBall([[-1]]));
console.log(
    findBall([
        [1, 1, 1, 1, 1, 1],
        [-1, -1, -1, -1, -1, -1],
        [1, 1, 1, 1, 1, 1],
        [-1, -1, -1, -1, -1, -1],
    ]),
);
