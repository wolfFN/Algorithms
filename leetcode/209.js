/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let sum = 0;
    let i,
        j = 0;
    let result = nums.length + 1;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < s) {
            continue;
        }
        while (sum - nums[j] >= s) {
            // console.log(j, nums[j], sum);
            sum = sum - nums[j];
            j++;
        }
        result = Math.min(result, i - j + 1);
    }
    return result === nums.length + 1 ? 0 : result;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(1, []));
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
