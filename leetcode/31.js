/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const len = nums.length;
    let i, j;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            break;
        }
    }
    if (i === -1) {
        return nums.reverse();
    }

    for (j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
            break;
        }
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    return nums;
};

console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 2, 3, 8, 7, 6, 5, 4]));
console.log(nextPermutation([2, 3, 1]));
