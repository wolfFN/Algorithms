/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) /2 );
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([6, 7, 0, 1, 2, 4, 5], 6));
console.log(search([1], 1));
console.log(search([1, 3], 3));
console.log(search([3, 1], 1));
