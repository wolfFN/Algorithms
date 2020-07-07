/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    const backtrack = (path, start) => {
        if (path.length === len) {
            result.push([...path].join(''));
            return;
        }

        for (let i = start; i < len; i++) {
            if (S[i] >= 0 && S[i] <= 9) {
                backtrack(path + S[i], i + 1);
            } else {
                backtrack(path + S[i].toLowerCase(), i + 1);
                backtrack(path + S[i].toUpperCase(), i + 1);
            }
        }
    };

    const len = S.length;
    const result = [];
    backtrack('', 0);
    return result;
};

console.log(letterCasePermutation('a1b2'));
