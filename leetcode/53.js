/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0],
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

var maxSubArrayDP = function (nums) {
    let max = nums[0],
        dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + nums[i];
        max = Math.max(max, dp[i]);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrayDP([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
