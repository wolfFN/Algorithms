/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    let result = 0;
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        if (isSubsequence(words[i], s, map)) {
            result++;
        }
    }
    return result;
};

var isSubsequence = function (s, t, map) {
    if (map.has(t)) {
        return map[t] ? 1 : 0;
    }

    let index = -1;

    for (const c of s) {
        const found = t.indexOf(c, index + 1);
        if (found === -1) {
            map.set(s, false);
            return false;
        }
        index = found;
    }
    map.set(s, true);
    return true;
};

console.log(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']));
