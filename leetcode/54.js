/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (
    matrix,
    rowStart = 0,
    rowEnd = matrix.length - 1,
    columnStart = 0,
    columnEnd = matrix[0].length - 1,
) {
    const result = [];
    console.log(rowStart, rowEnd, columnStart, columnEnd);

    if (rowStart > rowEnd || columnStart > columnEnd) {
        return [];
    }
    if (rowStart === rowEnd) {
        for (let j = columnStart; j <= columnEnd; j++) {
            result.push(matrix[rowStart][j]);
        }
        return result;
    }

    if (columnStart === columnEnd) {
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][columnStart]);
        }
        return result;
    }

    for (let j = columnStart; j <= columnEnd; j++) {
        result.push(matrix[rowStart][j]);
    }

    for (let i = rowStart + 1; i <= rowEnd; i++) {
        result.push(matrix[i][columnEnd]);
    }

    for (let j = columnEnd - 1; j >= columnStart; j--) {
        result.push(matrix[rowEnd][j]);
    }

    for (let i = rowEnd - 1; i >= rowStart + 1; i--) {
        result.push(matrix[i][columnStart]);
    }

    // console.log(rowStart, rowEnd, columnStart, columnEnd);
    // console.log(result);

    return [
        ...result,
        ...spiralOrder(
            matrix,
            rowStart + 1,
            rowEnd - 1,
            columnStart + 1,
            columnEnd - 1,
        ),
    ];
};

// console.log(
//     spiralOrder([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ]),
// );
// console.log(
//     spiralOrder([
//         [1, 2, 3, 4],
//         [5, 6, 7, 8],
//         [9, 10, 11, 12],
//         [13, 14, 15, 16],
//     ]),
// );
// console.log(spiralOrder([[1]]));
console.log(spiralOrder([[3], [2]]));
