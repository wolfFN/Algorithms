/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const backtrack = function (path) {
        if (path.length === s.length) {
            result.push([...path].join(''));
            return;
        }
        const i = path.length;
        if (s[i] >= 0 && s[i] <= 9) {
            backtrack(path + s[i]);
        } else {
            backtrack(path + s[i].toLowerCase());
            backtrack(path + s[i].toUpperCase());
        }
    };

    const result = [];
    backtrack('');
    return result;
};

console.log(letterCasePermutation('a1b2'));
