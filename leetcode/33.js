/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let mid = 0,
        low = 0,
        high = nums.length - 1;

    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
        if (low === high) {
            mid = low
        }
    }

    if (target <= nums[nums.length - 1]) {
        low = mid;
        high = nums.length - 1;
    } else {
        low = 0;
        hight = mid;
    }

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([6, 7, 0, 1, 2, 4, 5], 6));
// console.log(search([1], 1));
// console.log(search([1, 3], 3));
// console.log(search([3, 1], 1));
