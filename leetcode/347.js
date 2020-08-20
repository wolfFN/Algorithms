/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const countMap = {};
    for (const num of nums) {
        countMap[num] ? countMap[num]++ : (countMap[num] = 1);
    }

    const pq = new PriorityQueue();
    const keys = Object.keys(countMap);
    for (let i = 0; i < k; i++) {
        pq.insert(countMap[keys[i]]);
    }

    for (let i = k; i < keys.length; i++) {
        if (countMap[keys[i]] > pq.getMin()) {
            pq.delMin();
            pq.insert(countMap[keys[i]]);
        }
    }

    console.log(pq._queue);
    console.log(pq.getMin());

    const result = [];
    for (const key of keys) {
        if (countMap[key] >= pq.getMin()) {
            result.push(key);
        }
    }

    return result;
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


console.log(
    topKFrequent(
        [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6,
            7,
            7,
            8,
            2,
            3,
            1,
            1,
            1,
            10,
            11,
            5,
            6,
            2,
            4,
            7,
            8,
            5,
            6,
        ],
        10,
    ),
);
