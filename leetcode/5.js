/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = [0, 0];
    for (let i = 0; i < s.length; i++) {
        let [x, y] = drome(s, i, i);
        if (y - x > result[1] - result[0]) {
            result = [x, y];
        }
        [x, y] = drome(s, i, i + 1);
        if (y - x > result[1] - result[0]) {
            result = [x, y];
        }
    }
    return s.substring(result[0], result[1] + 1);
};

function drome(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return [i + 1, j - 1];
}

// console.log(longestPalindrome('bananas'));
