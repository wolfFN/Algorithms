/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.split('');

    let left = 0,
        right;
    while (left < s.length) {
        while (s[left] === ' ' && left < s.length) {
            left++;
        }
        right = left + 1;
        while (s[right] !== ' ' && right < s.length) {
            right++;
        }

        reverse(arr, left, right - 1);
        left = right;
    }

    return arr.join('');
};

var reverse = function (s, left, right) {
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s.join('');
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
