/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let prevMax = 0,
        max = 0,
        jump = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (max >= nums.length - 1) {
            return jump + 1;
        }

        if (i === prevMax) {
            jump++;
            prevMax = max;
        }
    }
    return jump;
};

console.log(jump([2, 3, 1, 1, 4]));
