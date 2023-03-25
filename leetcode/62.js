/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function (m, n) {
//     const dp = new Array(m);
//     dp[0] = [];
//     for (let j = 0; j < n; j++) {
//         dp[0][j] = 1;
//     }

//     for (let i = 1; i < m; i++) {
//         dp[i] = [];
//         dp[i][0] = 1;
//         for (let j = 1; j < n; j++) {
//             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//         }
//     }

//     return dp[m - 1][n - 1];
// };

var uniquePaths = function (m, n) {
    let result = 1;
    for (let i = Math.max(m, n); i < m + n - 1; i++) {
        result *= i;
    }
    for (let i = 1; i < Math.min(m, n); i++) {
        result /= i;
    }
    return result;
};

console.log(uniquePaths(3, 7));
