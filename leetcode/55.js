/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let cur = 0;
    let max = nums[0];

    while (cur < nums.length && cur <= max && max < nums.length) {
        max = Math.max(max, cur + nums[cur]);
        cur++;
    }

    return cur >= nums.length || max >= nums.length;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
