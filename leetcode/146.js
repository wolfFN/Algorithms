/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.lru = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.lru[key]) {
        this.lru[key].count = this.count++;
        return this.lru[key].value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.lru[key]) {
        const keys = Object.keys(this.lru);

        if (keys.length === this.capacity) {
            let minIndex = 0;
            for (let i = 0; i < keys.length; i++) {
                if (this.lru[keys[i]].count < this.lru[keys[minIndex]].count) {
                    minIndex = i;
                }
            }
            delete this.lru[keys[minIndex]];
        }
    }

    this.lru[key] = {
        value,
        count: this.count++,
    };
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
