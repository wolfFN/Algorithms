class WeightedQuickUnion {
    _count = 0;
    _unionMap = [];
    _size = [];

    constructor(length) {
        this._count = length;
        this._unionMap = Array.from({ length }, (v, i) => i);
        this._size = Array.from({ length }, (v, i) => i);
    }

    count() {
        return this._count;
    }

    find(p) {
        while (this._unionMap[p] !== p) {
            // path compression
            this._unionMap[p] = this._unionMap[this._unionMap[p]];
            p = this._unionMap[p];
        }
        return p;
    }

    connected(p, q) {
        return this.find[p] === this.find[q];
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }

        if (this._size[pRoot] < this._size[qRoot]) {
            this._unionMap[pRoot] = qRoot;
            this._size[pRoot] += this._size[qRoot]
        } else {
            this._unionMap[qRoot] = pRoot;
            this._size[qRoot] += this._size[pRoot]
        }

        this._count--;
    }
}

module.exports = WeightedQuickUnion;