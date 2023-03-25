/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        const curChar = strs[0][i];
        if (strs.every(s => s[i] === curChar)) {
            prefix += curChar;
        } else {
            break;
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['cir', 'car']));
