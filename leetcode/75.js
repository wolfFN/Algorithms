/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0,
        j = 0,
        k = nums.length - 1;
    while (j <= k) {
        if (nums[j] < 1) {
            swap(nums, i, j);
            i++;
            j++;
        } else if (nums[j] > 1) {
            swap(nums, j, k);
            k--;
        } else {
            j++;
        }
    }
    return nums;
};

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

console.log(sortColors([2, 0, 2, 1, 1, 0]));
