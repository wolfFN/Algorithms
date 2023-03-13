/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = new Array(rowIndex + 1);
    let up = rowIndex;
    result[0] = 1;
    result[up] = 1;
    for (let i = 1; i < rowIndex; i++, up--) {
        result[i] = (result[i - 1] * up) / i;
    }
    return result;
};

console.log(getRow(6));
