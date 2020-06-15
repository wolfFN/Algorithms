class QuickUnion {
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
        while (this._unionMap[p] !== p) {
            p = this._unionMap[p];
        }
        return p;
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        this._unionMap[pRoot] = qRoot;
        this._count--;
    }
}

module.exports = QuickUnion;