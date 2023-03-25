/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();
    while (!set.has(n)) {
        set.add(n);
        n = getHappy(n);
        if (n === 1) {
            return true;
        }
    }
    return false;
};

const getHappy = n => {
    return n
        .toString()
        .split('')
        .map(s => Number(s))
        .reduce((sum, n) => sum + n * n, 0);
};

console.log(isHappy(19));
