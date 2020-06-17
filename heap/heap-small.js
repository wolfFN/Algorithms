const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);


const downAdjust = (arr, index, length) => {
    let childIndex = 2 * index + 1;
    while (childIndex < length) {
        if (childIndex + 1 < length && arr[childIndex + 1] < arr[childIndex]) {
            childIndex++;
        }

        if (arr[index] <= arr[childIndex]) {
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


const arr = [7, 1, 3, 10, 5, 2, 8, 9, 6];
console.log(heapSort(arr));