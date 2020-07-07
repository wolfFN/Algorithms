/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0,
        high = nums.length - 1,
        mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] >= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
