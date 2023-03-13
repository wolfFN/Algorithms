/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//     const dp = [];
//     dp.push(nums[0]);
//     dp.push(Math.max(nums[0], nums[1]));
//     for (let i = 2; i < nums.length; i++) {
//         dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i]));
//     }
//     return dp[nums.length - 1];
// };

// console.log(rob([2, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let prev2 = 0,
        last = nums[0],
        cur = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        prev2 = last;
        last = cur;
        cur = Math.max(last, prev2 + nums[i]);
        // [cur, last, prev2] = [Math.max(last, prev2 + nums[i]), cur, last];
    }
    return cur;
};

console.log(rob([4, 1, 2, 7, 5, 3, 1]));
