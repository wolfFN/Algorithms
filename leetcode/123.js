/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices || !prices.length || prices.length < 2) {
        return 0;
    }

    let dp_1_0 = 0;
    let dp_1_1 = -Infinity;
    let dp_2_0 = 0;
    let dp_2_1 = -Infinity;

    for (let i = 0; i < prices.length; i++) {
        const p = prices[i];
        dp_2_0 = Math.max(dp_2_0, dp_2_1 + p);
        dp_2_1 = Math.max(dp_2_1, dp_1_0 - p);
        dp_1_0 = Math.max(dp_1_0, dp_1_1 + p);
        dp_1_1 = Math.max(dp_1_1, -p);
    }
    return dp_2_0;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
