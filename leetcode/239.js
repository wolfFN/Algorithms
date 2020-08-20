/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let queue = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length && queue[queue.length - 1] < nums[i]) {
            queue.pop();
        }
        queue.push(nums[i]);

        let j = i + 1 - k;
        if (j >= 0) {
            result.push(queue[0]);
            if (nums[j] === queue[0]) {
                queue.shift();
            }
        }
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
