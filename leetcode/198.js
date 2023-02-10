/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = [];
    dp.push(nums[0]);
    dp.push(Math.max(nums[0], nums[1]));
    for (let i = 2; i < nums.length; i++) {
        dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i]));
    }
    return dp[nums.length - 1];
};

console.log(rob([2, 1]));
