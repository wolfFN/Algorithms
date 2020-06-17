/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this._queue = [];
    this._size = k;
    for (let i = 0; i < nums.length; i++) {
        this.add(nums[i]);
    }
};

KthLargest.prototype._swap = function (i, j) {
    [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
};

KthLargest.prototype._delMin = function () {
    this._swap(0, this._queue.length - 1);
    this._queue.pop();
    let k = 0;
    while (2 * k + 1 < this._queue.length) {
        let j = 2 * k + 1;
        if (j + 1 < this._queue.length && this._queue[j + 1] < this._queue[j]) {
            j++;
        }
        if (this._queue[k] < this._queue[j]) {
            break;
        }
        this._swap(k, j);
        k = j;
    }
};

KthLargest.prototype._swim = function () {
    let k = this._queue.length - 1;
    while (k > 0 && this._queue[k] < this._queue[Math.floor((k - 1) / 2)]) {
        this._swap(k, Math.floor((k - 1) / 2));
        k = Math.floor((k - 1) / 2);
    }
};

KthLargest.prototype._getMin = function () {
    return this._queue[0];
};

KthLargest.prototype.add = function (val) {
    if (val > this._getMin() || this._queue.length < this._size) {
        if (this._queue.length === this._size) {
            this._delMin();
        }
        this._queue.push(val);
        this._swim();
    }

    return this._getMin();
};
