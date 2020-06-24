/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    const len = s.length,
        state = [];
    let start = 0,
        end = 0;

    for (let i = 0; i < len; i++) {
        state[i] = [];
        state[i][i] = true;
    }

    for (let i = len - 1; i >= 0; i--) {
        for (let dist = 1; dist < len - i; dist++) {
            let j = dist + i;
            state[i][j] =
                dist === 1
                    ? s[i] === s[j]
                    : s[i] === s[j] && state[i + 1][j - 1];

            if (state[i][j] && dist > end - start) {
                start = i;
                end = j;
            }
        }
    }

    return s.substring(start, end + 1);
};

// console.log(longestPalindrome('bb'));
