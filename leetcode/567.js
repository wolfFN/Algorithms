/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const length = s1.length;
    let count = 0;
    const map = {};
    for (let i = 0; i < length; i++) {
        if (map[s1[i]] === undefined) {
            map[s1[i]] = 1;
            count++;
        } else {
            map[s1[i]]++;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        const val = s2[i];
        if (map[val] !== undefined) {
            map[val]--;
        }
        if (map[val] === 0) {
            count--;
        }

        const j = i - length + 1;
        if (j - 1 >= 0) {
            if (map[s2[j - 1]] === 0) {
                count++;
            }
            if (map[s2[j - 1]] !== undefined) {
                map[s2[j - 1]]++;
            }
        }

        if (count === 0) {
            return true;
        }
    }
    return false;
};

console.log(checkInclusion('ky', 'ainwkckifykxlribaypk'));
