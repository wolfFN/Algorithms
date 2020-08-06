/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    backTrack([], nums, result);
    return result;
};

const backTrack = (path, options, result) => {
    if (options.length === 0) {
        result.push([...path]);
        return;
    }

    const uniqueSet = new Set();
    for (let i = 0; i < options.length; i++) {
        const cur = options[i];
        if (uniqueSet.has(cur)) {
            continue;
        }

        path.push(cur);
        uniqueSet.add(cur);
        backTrack(
            path,
            [...options.slice(0, i), ...options.slice(i + 1)],
            result,
        );
        path.pop();
    }
};

console.log(permuteUnique([1, 1, 3]));
