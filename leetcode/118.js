/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result.push([]);
        for (let j = 0; j < i + 1; j++) {
            if (i === 0 || j === 0 || j === i) {
                result[i].push(1);
                continue;
            }
            result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
        }
    }
    return result;
};


console.log(generate(5));
