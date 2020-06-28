/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let start = intervals[0][0];
    let end = intervals[0][1];

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
        [2, 6],
        [8, 10],
        [15, 18],
    ]),
);
