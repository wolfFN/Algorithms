/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const result = [];
    let i = m - 1,
        j = n - 1,
        pos = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[pos] = nums2[j];
            j--;
        } else {
            nums1[pos] = nums1[i];
            i--;
        }
        pos--;
    }

    while (i >= 0) {
        nums1[pos--] = nums1[i--];
    }

    while (j >= 0) {
        nums1[pos--] = nums2[j--];
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([0], 0, [1], 1));