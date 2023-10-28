/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    const length = Math.max(a.length, b.length);
    const result = [];

    for (let i = 0; i < length; i++) {
        const num1 = Number(a[i] || 0);
        const num2 = Number(b[i] || 0);
        const cur = num1 + num2 + Number(result[i] || 0);

        // console.log(a[i], b[i], cur);
        if (cur > 1) {
            result[i] = cur % 2;
            result.push(1);
        } else {
            result[i] = cur;
        }
        // console.log(result);
    }

    return result.reverse().join('');
};

console.log(addBinary('1', '11'));
console.log(addBinary('1010', '1011'));
