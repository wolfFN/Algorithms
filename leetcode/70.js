/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let [a, b] = [1, 2];
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};
