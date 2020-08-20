/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const k = s1.length;
    let count = 0;
    const map = {};
    for (const c of s1) {
        if (!map[c]) {
            map[c] = 1;
            count++;
        } else {
            map[c]++;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        const c = s2[i];
        if (map[c] !== undefined) {
            map[c]--;
        }
        if (map[c] === 0) {
            count--;
        }

        const j = i + 1 - k;
        if (j - 1 >= 0) {
            let last = s2[j - 1];
            if (map[last] === 0) {
                count++;
            }
            if (map[last] !== undefined) {
                map[last]++;
            }
            // console.log(c, last, map, count);
        }

        if (count === 0) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion('ky', 'ainwkckifykxlribaypk'));
