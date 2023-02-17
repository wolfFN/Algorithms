/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let low = 0,
        high = nums.length - 1,
        mid;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (nums[mid] >= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if (nums[low] !== target) {
        return [-1, -1];
    }

    const start = low;

    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [start, high];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([], 0));
