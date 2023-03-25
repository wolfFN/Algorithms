/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== '1') {
            return;
        }

        grid[i][j] = 0;
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};
