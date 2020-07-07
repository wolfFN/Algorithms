/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let low = 0,
        high = nums.length - 1,
        mid1,
        mid2;
    while (low <= high) {
        mid1 = low + Math.floor((high - low) / 2);
        mid2 = mid1 + 1;
        if (nums[mid1] > nums[mid2]) {
            high = mid1 - 1;
        } else {
            low = mid2 + 1;
        }
    }
    return low;
};
