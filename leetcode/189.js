/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

var reverse = function (nums, s, e) {
    while (s < e) {
        [nums[s], nums[e]] = [nums[e], nums[s]];
        s++;
        e--;
    }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);

const nums2 = [-1, -100, 3, 99];
rotate(nums2, 2);
console.log(nums2);
