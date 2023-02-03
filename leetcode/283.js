/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0,
        right = 0;
    while (right < nums.length) {
        while (nums[left] !== 0 && left < nums.length) {
            left++;
        }
        right = Math.max(right, left + 1);
        while (nums[right] === 0 && right < nums.length) {
            right++;
        }
        if (left < nums.length && right < nums.length) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
    }
};

