/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [[]];
    for (const num of nums) {
        const newResult = result.map(r => [...r, num]);
        result = [...result, ...newResult];
    }
    return result;
};

var subsetsBT = function (nums) {
    let result = [];
    backtrack([], 0, nums, result);
    return result;
};

const backtrack = (path, start, nums, result) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
        path.push(nums[i]);
        backtrack(path, i + 1, nums, result);
        path.pop();
    }
};

console.log(subsetsBT([1, 2, 3]));
