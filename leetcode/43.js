/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    const m = num1.length,
        n = num2.length,
        result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p0 = i + j,
                p1 = i + j + 1;
            const sum = result[p1] + num1[i] * num2[j];
            result[p1] = sum % 10;
            result[p0] += parseInt(sum / 10);
        }
    }

    if (result[0] === 0) {
        result.shift();
    }

    return result.join('');
};

// console.log(multiply('2', '3'));
console.log(multiply('123', '456'));
