/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0,
        high = nums.length - 1,
        mid;
    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
};

console.log(findMin([3, 1, 2]));
