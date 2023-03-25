/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n, result1 = 0, result2 = 1) {
//     if (n === 0) {
//         return result1;
//     }
//     return fib(n - 1, result2, result1 + result2);
// };

var fib = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let prev = 0,
        cur = 1;

    for (let i = 1; i < n; i++) {
        [cur, prev] = [cur + prev, cur];
    }
    return cur;
};

for (let i = 0; i < 20; i++) {
    console.log(fib(i));
}
