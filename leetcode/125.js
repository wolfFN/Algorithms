/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0,
        j = s.length - 1;

    while (i < j) {
        while (!isAlphanumeric(s[i]) && i < j) {
            i++;
        }
        while (!isAlphanumeric(s[j]) && i < j) {
            j--;
        }
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

const isAlphanumeric = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
