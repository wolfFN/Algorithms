/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    const result = [];
    let rowStart = 0,
        rowEnd = matrix.length - 1,
        colStart = 0,
        colEnd = matrix[0].length - 1;
    let row = 0,
        col = 0;
    while (true) {
        for (col = colStart; col <= colEnd; col++) {
            result.push(matrix[rowStart][col]);
        }

        if (rowStart++ === rowEnd) {
            break;
        }

        for (row = rowStart; row <= rowEnd; row++) {
            result.push(matrix[row][colEnd]);
        }

        if (colEnd-- === colStart) {
            break;
        }

        for (col = colEnd; col >= colStart; col--) {
            result.push(matrix[rowEnd][col]);
        }

        if (rowEnd-- === rowStart) {
            break;
        }

        for (row = rowEnd; row >= rowStart; row--) {
            result.push(matrix[row][colStart]);
        }

        if (colStart++ === colEnd) {
            break;
        }
    }
    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(spiralOrder(matrix));
