/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < amount + 1; i++) {
        for (const c of coins) {
            if (i < c) {
                continue;
            }
            dp[i] = dp[i] ? Math.min(dp[i], dp[i - c] + 1) : dp[i - c] + 1;
        }
    }

    return dp[amount] == amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([2], 0));
console.log(coinChange([2], 3));
console.log(coinChange([186, 419, 83, 408], 6249));
