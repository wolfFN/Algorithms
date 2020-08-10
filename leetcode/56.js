/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const result = [];
    if (!intervals.length) {
        return result;
    }

    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let [start, end] = intervals[0];

    for (const [s, e] of intervals) {
        if (s <= end) {
            start = start < s ? start : s;
            end = end > e ? end : e;
        } else {
            result.push([start, end]);
            start = s;
            end = e;
        }
    }
    result.push([start, end]);

    return result;
};

console.log(
    merge([
        [1, 3],
        [8, 10],
        [2, 6],
        [15, 18],
    ]),
);
