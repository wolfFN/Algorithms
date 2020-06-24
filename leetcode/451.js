/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const countMap = {};
    for (const c of s) {
        countMap[c] ? countMap[c]++ : (countMap[c] = 1);
    }
    const countArr = [];
    for (const k of Object.keys(countMap)) {
        countArr.push({
            value: k,
            count: countMap[k],
        });
    }
    heapSort(countArr);
    let result = '';
    for (const { value, count } of countArr) {
        for (let i = 0; i < count; i++) {
            result += value;
        }
    }
    return result;
};

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
const downAdjust = (arr, index, length) => {
    let childIndex = 2 * index + 1;
    while (childIndex < length) {
        if (
            childIndex + 1 < length &&
            arr[childIndex + 1].count < arr[childIndex].count
        ) {
            childIndex++;
        }

        if (arr[index].count <= arr[childIndex].count) {
            break;
        }

        swap(arr, index, childIndex);
        index = childIndex;
        childIndex = 2 * index + 1;
    }
};
const heapSort = arr => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        downAdjust(arr, i, arr.length);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i);
        downAdjust(arr, 0, i);
    }
    return arr;
};

console.log(frequencySort('treecccaaa'));
