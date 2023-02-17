/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum - leftSum - nums[i] === leftSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
