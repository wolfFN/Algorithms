/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const dp = [];
    for (let i = 0; i < triangle.length; i++) {
        const cur = triangle[i];
        for (let j = cur.length - 1; j >= 0; j--) {
            if (dp[j] === undefined) {
                dp[j] = (dp[j - 1] || 0) + cur[j];
            } else {
                dp[j] = Math.min(dp[j - 1] || Infinity, dp[j]) + cur[j];
            }
        }
    }
    return Math.min(...dp);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
