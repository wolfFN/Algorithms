/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        console.log(i);
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
