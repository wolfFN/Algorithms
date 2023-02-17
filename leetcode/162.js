/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let low = 0,
        high = nums.length - 1,
        mid;

    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
