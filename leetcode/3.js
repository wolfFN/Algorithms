/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0,
        end = 0,
        max = 0;
    const map = {};

    while (end < s.length) {
        const val = s[end];

        if (map[val] >= start) {
            start = map[val] + 1;
            map[val] = end;
            end++;
            continue;
        }

        max = Math.max(max, end - start + 1);
        map[val] = end;
        end++;
    }
    return max;
};
