/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const result = new Array(nums.length);
    let left = 0,
        right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }

    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-10, -3, -2, -2, -2, 1, 3, 3, 4, 8]));
