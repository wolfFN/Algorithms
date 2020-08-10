class Interval {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
}

var RangeModule = function () {
    this.range = [];
};

RangeModule.prototype.addRange = function (left, right) {
    const newArr = []; // Replace the existent range array

    let itv;
    let i = 0;
    for (; i < this.range.length; i++) {
        itv = this.range[i];

        if (itv.left > right) break;

        // No overlapping, so just push
        if (itv.right < left) {
            newArr.push(itv);

            // Merge overlapping intervals
        } else {
            left = Math.min(itv.left, left);
            right = Math.max(itv.right, right);
        }
    }

    // Add the merged interval
    newArr.push(new Interval(left, right));

    // Add the non-overlapping intervals after `right`
    if (i < this.range.length) newArr.push(...this.range.slice(i));

    this.range = newArr;
};

RangeModule.prototype.queryRange = function (left, right) {
    if (this.range.length === 0) return false;

    let lo = 0;
    let hi = this.range.length - 1;
    let mid;
    while (lo < hi) {
        mid = ~~((hi - lo) / 2) + lo;
        if (this.range[mid].left === left) {
            lo = mid;
            break;
        } else if (this.range[mid].left > left) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    const itv =
        this.range[lo].left === left
            ? this.range[lo]
            : this.range[lo].left > left
            ? this.range[lo - 1]
            : this.range[lo];

    return Boolean(itv && left >= itv.left && right <= itv.right);
};

RangeModule.prototype.removeRange = function (left, right) {
    if (
        this.range.length === 0 ||
        left > this.range[this.range.length - 1].right ||
        right < this.range[0].left
    )
        return;

    const newArr = [];
    const tmp = []; // Store the new created intervals by removal

    let i = 0;
    let itv;
    for (; i < this.range.length; i++) {
        itv = this.range[i];
        if (itv.left >= right) break;
        if (itv.right <= left) {
            newArr.push(itv);
        } else {
            if (itv.left < left) {
                tmp.push(new Interval(itv.left, left));
            }
            if (itv.right > right) {
                tmp.push(new Interval(right, itv.right));
            }
        }
    }

    if (tmp.length) newArr.push(...tmp);
    if (i < this.range.length) newArr.push(...this.range.slice(i));

    this.range = newArr;
};
