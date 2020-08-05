/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    const dfa = [1];
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        dfa[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dfa[i] = Math.max(dfa[i], dfa[j] + 1);
            }
        }
        max = Math.max(dfa[i], max);
    }

    return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
