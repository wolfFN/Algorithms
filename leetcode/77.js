/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const options = [],
        result = [];
    for (let i = 0; i < n; i++) {
        options.push(i + 1);
    }
    backTrack([], options, k, result);
    return result;
};

const backTrack = function (path, options, length, result) {
    if (path.length === length) {
        result.push([...path]);
        return;
    }
    for (let i = 0; i < options.length; i++) {
        path.push(options[i]);
        backTrack(
            path,
            [...options.slice(i + 1)],
            length,
            result,
        );
        path.pop();
    }
};

console.log(combine(4, 2));
