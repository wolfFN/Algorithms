/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    // s = s.split('').map(c => Number(c) - Number('a'));
    s = s
        .split('')
        .map(c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join('');
    for (let i = 0; i < k; i++) {
        s = s
            .split('')
            .map(c => Number(c))
            .reduce((acc, cur) => (acc += cur), 0)
            .toString();
    }
    return Number(s);
};

console.log(getLucky('iiii', 1));
console.log(getLucky('leetcode', 2));
