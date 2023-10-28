/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let start, end;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!end && s[i] !== ' ') {
            end = i;
        }
        if (!!end && s[i] === ' ') {
            start = i + 1;
        }
        if (!!start && !!end) {
            break;
        }
    }

    if (!start) {
        start = 0;
    }
    return end - start + 1;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('a'));
