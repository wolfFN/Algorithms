/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;

    if (l1 + l2 === 1) {
        return nums1[0] || nums2[0];
    }

    const m1 = Math.floor((l1 + l2 - 1) / 2);
    const m2 = m1 + 1;
    let v,
        w,
        i = 0,
        j = 0,
        k = 0;
    while (k <= m2) {
        if (nums1[i] === undefined) {
            w = v;
            v = nums2[j];
            j++;
            k++;
            continue;
        }
        if (nums2[j] === undefined) {
            w = v;
            v = nums1[i];
            i++;
            k++;
            continue;
        }

        if (nums1[i] < nums2[j]) {
            w = v;
            v = nums1[i];
            i++;
            k++;
        } else {
            w = v;
            v = nums2[j];
            j++;
            k++;
        }
    }

    if ((l1 + l2) % 2 !== 0) {
        return w;
    } else {
        return (v + w) / 2;
    }
};
