/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0,
        right = numbers.length - 1;

    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] < target) {
            left++;
        }
        if (numbers[left] + numbers[right] > target) {
            right--;
        }
    }
    return [left + 1, right + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
