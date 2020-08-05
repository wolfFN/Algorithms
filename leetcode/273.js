/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num == 0) {
        return 'Zero';
    }

    let result = '';
    let i = 0;
    while (num) {
        if (num % 1000 != 0) {
            result =
                formatUnderThousand(num % 1000) +
                ThousandLevelUnits[i] +
                ' ' +
                result;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    return result.trim();
};

const formatUnderThousand = num => {
    if (num === 0) {
        return '';
    }
    if (num < 20) {
        return underTwenty[num] + ' ';
    }
    if (num < 100) {
        return tens[Math.floor(num / 10)] + ' ' + formatUnderThousand(num % 10);
    }

    return (
        underTwenty[Math.floor(num / 100)] +
        ' ' +
        'Hundred' +
        ' ' +
        formatUnderThousand(num % 100)
    );
};

const ThousandLevelUnits = ['', 'Thousand', 'Million', 'Billion'];

const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
];

const underTwenty = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
];

