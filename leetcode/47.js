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
    const uniques = new Set();
    for (let i = 0; i < options.length; i++) {
        if (uniques.has(options[i])) {
            continue;
        } else {
            uniques.add(options[i]);
            path.push(options[i]);

            backTrack(
                path,
                [...options.slice(0, i), ...options.slice(i + 1)],
                result
            );
            path.pop();
        }
    }
};

// console.log(permuteUnique([1, 1, 3]));