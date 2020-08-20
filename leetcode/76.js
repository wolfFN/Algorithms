/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let result = '';
    let left = 0,
        right = 0,
        count = 0;
    const map = {};

    for (const c of t) {
        if (!map[c]) {
            map[c] = 1;
            count++;
        } else {
            map[c]++;
        }
    }

    while (right < s.length) {
        let c = s[right];
        if (map[c] !== undefined) {
            map[c]--;
        }
        if (map[c] === 0) {
            count--;
        }

        while (count === 0) {
            let c = s[left];
            if (map[c] !== undefined) {
                map[c]++;
            }
            if (map[c] > 0) {
                count++;
            }
            if (!result || right + 1 - left < result.length) {
                result = s.substring(left, right + 1);
            }
            left++;
        }

        right++;
    }
    return result;
};

const S = 'ADOBECODEBANC';
const T = 'ABC';

console.log(minWindow(S, T));
