/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length && i <= max; i++) {
        if (i + nums[i] > max) {
            max = i + nums[i];
        }
        if (max >= nums.length - 1) {
            return true;
        }
        // console.log(i, max);
    }
    return max >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4]));
