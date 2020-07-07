/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums = nums.sort();
    let result = [[]];
    for (let i = 0; i < nums.length; ) {
        let count = 0;
        while (count + i < nums.length && nums[i] === nums[count + i]) {
            count++;
        }
        let prev = [...result];
        for (let j = 0; j < count; j++) {
            prev = prev.map(p => [...p, nums[i]]);
            result = [...result, ...prev];
        }
        i += count;
    }
    return result;
};

console.log(subsetsWithDup([1]));
