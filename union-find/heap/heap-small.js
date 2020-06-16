const downAdjust = (parentIndex, length) => {
    let temp = arr[parentIndex];
    let childIndex = 2 * parentIndex + 1;

    while (childIndex <= length) {
        if (childIndex < length && arr[childIndex + 1] < arr[childIndex]) {
            childIndex++;
        }

        if (temp <= arr[childIndex]) {
            break;
        }

        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1;
    }
    arr[parentIndex] = temp;
};

// const arr = [7, 1, 3, 10, 5, 2, 8, 9, 6];
const arr = [7, 5, 3, 10, 1, 2, 8, 9];

for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    downAdjust(i, arr.length - 1);
}

console.log(arr);

// for (let i = arr.length - 1; i > 0; i--) {
//     const temp = arr[i];
//     arr[i] = arr[0];
//     arr[0] = temp;
//     downAdjust(0, i - 1);
// }

// console.log(arr);
