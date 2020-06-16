class PriorityQueue {
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
        let index = this.size() - 1;
        while (
            index > 0 &&
            this._queue[index] < this._queue[this._getParentIndex(index)]
        ) {
            this._exch(index, this._getParentIndex(index));
            index = this._getParentIndex(index);
        }
    }

    _sink() {
        if (this.size() === 1) {
            return;
        }
        let k = 0;
        while (2 * k + 1 < this.size()) {
            let j = 2 * k + 1;
            if (j + 1 < this.size() && this._queue[j + 1] < this._queue[j]) {
                j++;
            }
            if (this._queue[j] > this._queue[k]) {
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

    delMin() {
        this._exch(0, this.size() - 1);
        const min = this._queue.pop();
        this._sink();
        return min;
    }

    getMin() {
        return this._queue[0];
    }
}

module.exports = PriorityQueue;
