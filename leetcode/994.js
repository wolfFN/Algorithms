/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                rotAdjacent(i, j, grid, 2);
            }
        }
    }

    let max = 2;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
            max = Math.max(max, grid[i][j]);
        }
    }

    return max - 2;
};

var rotAdjacent = function (i, j, grid, minutes) {
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        grid[i][j] == 0 ||
        (grid[i][j] > 1 && grid[i][j] < minutes)
    ) {
        return;
    }

    grid[i][j] = minutes;

    rotAdjacent(i - 1, j, grid, minutes + 1);
    rotAdjacent(i + 1, j, grid, minutes + 1);
    rotAdjacent(i, j - 1, grid, minutes + 1);
    rotAdjacent(i, j + 1, grid, minutes + 1);
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ]),
);
