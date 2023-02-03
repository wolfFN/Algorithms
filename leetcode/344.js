/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0,
        right = s.length - 1,
        temp;

    while (left < right) {
        console.log(left, right);
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};

// console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
// console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
console.log(reverseString(['c', ' ', ' ', 'a', ',', 'n']));
console.log(
    reverseString([
        'A',
        ' ',
        'm',
        'a',
        'n',
        ',',
        ' ',
        'a',
        ' ',
        'p',
        'l',
        'a',
        'n',
        ',',
        ' ',
        'a',
        ' ',
        'c',
        'a',
        'n',
        'a',
        'l',
        ':',
        ' ',
        'P',
        'a',
        'n',
        'a',
        'm',
        'a',
    ]),
);

// console.log([
//     'a',
//     'm',
//     'a',
//     'n',
//     'a',
//     'P',
//     ' ',
//     ':',
//     'l',
//     'a',
//     'n',
//     'a',
//     'c',
//     ' ',
//     'a',
//     ' ',
//     ',',
//     'n',
//     'a',
//     'l',
//     'p',
//     ' ',
//     'a',
//     ' ',
//     ',',
//     'n',
//     'a',
//     'm',
//     ' ',
//     'A',
// ]);
