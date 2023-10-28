/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    if (m * n !== original.length) {
        // return Array.from({ length: m }).fill(Array.from({ length: n }));
        return [];
    }

    const result = [];
    for (let i = 0; i < m; i++) {
        const cur = [];
        for (let j = 0; j < n; j++) {
            cur.push(original[i * n + j]);
        }
        result.push(cur);
    }
    return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1, 2], 1, 1));
console.log(construct2DArray([1, 1, 1, 1], 4, 1));
