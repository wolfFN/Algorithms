/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    backtrack([], nums, result);
    return result;
};

var backtrack = function (path, options, result) {
    if (options.length === 0) {
        result.push([...path]);
    }
    for (let i = 0; i < options.length; i++) {
        path.push(options[i]);
        backtrack(
            path,
            [...options.slice(0, i), ...options.slice(i + 1)],
            result,
        );
        path.pop();
    }
};

console.log(permute([1, 2, 3]));
