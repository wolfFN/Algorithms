/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const zeroColumns = new Set();
    const zeroRows = new Set();

    const n = matrix.length;
    if (n === 0) {
        return matrix;
    }
    const m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                zeroColumns.add(j);
                zeroRows.add(i);
            }
        }
    }
    for (const r of zeroRows) {
        for (let i = 0; i < m; i++) {
            matrix[r][i] = 0;
        }
    }

    for (const c of zeroColumns) {
        for (let i = 0; i < n; i++) {
            matrix[i][c] = 0;
        }
    }

    return matrix;
};

const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];

console.log(setZeroes(matrix));
