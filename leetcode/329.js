/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (!matrix.length || !matrix[0].length) {
        return 0;
    }

    const m = matrix.length,
        n = matrix[0].length;
    const paths = [];
    for (let i = 0; i < m; i++) {
        paths[i] = [];
    }

    const dfs = (i, j, v) => {
        if (i < 0 || i >= m || j < 0 || j >= n || v >= matrix[i][j]) {
            return 0;
        }
        if (paths[i][j]) {
            return paths[i][j];
        }

        const value = matrix[i][j];
        paths[i][j] =
            1 +
            Math.max(
                dfs(i + 1, j, value),
                dfs(i - 1, j, value),
                dfs(i, j + 1, value),
                dfs(i, j - 1, value),
            );
        return paths[i][j];
    };

    let result = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!paths[i][j]) {
                result = Math.max(result, dfs(i, j, -Infinity));
            }
        }
    }
    return result;
};

const nums = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
];

console.log(longestIncreasingPath(nums));
