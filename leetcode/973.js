/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    const distances = points.map(([x, y]) => x * x + y * y);
    const mpq = new MaxPriorityQueue();


    for (let i = 0; i < K; i++) {
        mpq.insert(distances[i])
    }

    for (let i = K; i < distances.length; i++) {
        if (distances[i] < mpq.getMax()) {
            mpq.delMax();
            mpq.insert(distances[i])
        }
    }

    const kthDis = mpq.getMax();
    const result = [];
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] <= kthDis) {
            result.push(points[i])
        }
    }

    return result;
};

class MaxPriorityQueue {
    constructor() {
        this._queue = [];
    }

    size() {
        return this._queue.length;
    }

    _exch(i, j) {
        [this._queue[i], this._queue[j]] = [this._queue[j], this._queue[i]];
    }

    _getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    _swim() {
        let k = this.size() - 1;
        while (k > 0 && this._queue[k] > this._queue[this._getParentIndex(k)]) {
            this._exch(k, this._getParentIndex(k));
            k = this._getParentIndex(k);
        }
    }

    _sink() {
        let k = 0;
        while (2 * k + 1 < this.size()) {
            let j = 2 * k + 1;
            if (j + 1 < this.size() && this._queue[j + 1] > this._queue[j]) {
                j++;
            }
            if (this._queue[j] < this._queue[k]) {
                break;
            }
            this._exch(k, j);
            k = j;
        }
    }

    insert(n) {
        this._queue.push(n);
        this._swim();
    }

    delMax() {
        this._exch(0, this.size() - 1);
        const max = this._queue.pop();
        this._sink();
        return max;
    }

    getMax() {
        return this._queue[0];
    }
}

// const points = [
//     [3,3],[5,-1],[-2,4]
// ];
// const K = 2;
// console.log(kClosest(points, K));
