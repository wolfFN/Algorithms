/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = new Array(n).fill().map(() => new Array(n).fill());
    let count = 0,
        top = 0,
        bottom = n - 1,
        left = 0,
        right = n - 1;

    while (count < n * n) {
        // go right
        for (let i = left; i <= right; i++) {
            count++;
            result[top][i] = count;
        }
        top++;

        // go down
        for (let i = top; i <= bottom; i++) {
            count++;
            result[i][right] = count;
        }
        right--;

        // go left
        for (let i = right; i >= left; i--) {
            count++;
            result[bottom][i] = count;
        }
        bottom--;
        // go top
        for (let i = bottom; i >= top; i--) {
            count++;
            result[i][left] = count;
        }
        left++;
    }
    return result;
};

// console.log(generateMatrix(1));
// console.log(generateMatrix(2));
console.log(generateMatrix(4));
