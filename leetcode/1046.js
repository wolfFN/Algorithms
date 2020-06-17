/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const pq = new PriorityQueue();
    while (stones.length > 1) {
        const newArr = [];
        for (const s of stones) {
            if (pq.size() < 2) {
                pq.insert(s);
            } else if (s > pq.getMin()) {
                newArr.push(pq.delMin());
                pq.insert(s);
            } else {
                newArr.push(s);
            }
        }
        const newVal = pq._queue[1] - pq._queue[0];
        pq.delMin();
        pq.delMin();

        if (newVal !== 0 || newArr.length === 0) {
            newArr.push(newVal);
        }
        stones = newArr;
    }

    return stones[0];
};

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

    _parent(i) {
        return Math.floor((i - 1) / 2);
    }

    _swim() {
        let k = this.size() - 1;
        while (k > 0 && this._queue[k] < this._queue[this._parent(k)]) {
            this._exch(k, this._parent(k));
            k = this._parent(k);
        }
    }

    _sink() {
        let k = 0;
        while (2 * k + 1 < this.size()) {
            let j = 2 * k + 1;
            if (j + 1 < this.size() && this._queue[j + 1] < this._queue[j]) {
                j++;
            }
            if (this._queue[j] >= this._queue[k]) {
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