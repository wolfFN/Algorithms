var RangeModule = function () {
    this.ranges = [];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function (left, right) {
    const newRanges = [];
    let hasAdded = false;
    for (const [s, e] of this.ranges) {
        if (s <= right && left <= e) {
            left = Math.min(left, s);
            right = Math.max(right, e);
            continue;
        }
        if (s > right && !hasAdded) {
            hasAdded = true;
            newRanges.push([left, right]);
        }
        newRanges.push([s, e]);
    }

    if (!hasAdded) {
        newRanges.push([left, right]);
    }
    this.ranges = newRanges;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function (left, right) {
    return this.ranges.some(([s, e]) => s <= left && right <= e);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function (left, right) {
    const newRanges = [];
    for (const [s, e] of this.ranges) {
        if (s >= right || e <= left) {
            newRanges.push([s, e]);
            continue;
        }
        if (left <= s && right >= e) {
            continue;
        }

        if (left > s && right < e) {
            newRanges.push([s, left]);
            newRanges.push([right, e]);
            continue;
        }

        if (left <= s && right < e) {
            newRanges.push([right, e]);
            continue;
        }

        if (left > s && right > e) {
            newRanges.push([s, left]);
            continue;
        }
    }
    this.ranges = newRanges;
};

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
