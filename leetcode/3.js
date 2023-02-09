/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0,
        max = 0;
    const map = {};

    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if (map[val] >= start) {
            start = map[val] + 1;
            map[val] = i;
            continue;
        }
        max = Math.max(max, i - start + 1);
        map[val] = i;
    }

    return max;
};
