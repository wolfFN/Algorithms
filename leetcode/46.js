/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    backTrack([], nums, result);
    return result;
};

const backTrack = (path, options, result) => {
    if (options.length === 0) {
        result.push([...path]);
        return;
    }

    for (let i = 0; i < options.length; i++) {
        path.push(options[i]);
        backTrack(
            path,
            [...options.slice(0, i), ...options.slice(i + 1)],
            result
        );
        path.pop();
    }
};

console.log(permute([1, 2, 3]));
