/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const visitMap = Array.from({ length: grid.length });
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            max = Math.max(max, getArea(i, j, grid, visitMap));
        }
    }
    return max;
};

const getArea = function (i, j, grid, visitMap) {
    visitMap[i] = visitMap[i] || [];
    if (
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        visitMap[i][j]
    ) {
        return 0;
    }

    visitMap[i][j] = true;
    return grid[i][j] === 0
        ? 0
        : 1 +
              getArea(i - 1, j, grid, visitMap) +
              getArea(i + 1, j, grid, visitMap) +
              getArea(i, j - 1, grid, visitMap) +
              getArea(i, j + 1, grid, visitMap);
};

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid));
