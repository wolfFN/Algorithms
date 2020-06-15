class QuickFind {
    _count = 0;
    _unionMap = [];

    constructor(length) {
        this._count = length;
        this._unionMap = Array.from({ length }, (v, i) => i);
    }

    count() {
        return this._count;
    }

    find(p) {
        return this._unionMap[p];
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        const pId = this.find(p);
        const qId = this.find(q);
        if (pId === qId) {
            return;
        }
        for (let i = 0; i < this._unionMap.length; i++) {
            if (this.find(i) === pId) {
                this._unionMap[i] = qId;
            }
        }
        this._count--;
    }
}

module.exports = QuickFind;
